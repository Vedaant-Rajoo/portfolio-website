'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface MusicData {
  song: string;
  artist: string;
  platform: 'spotify' | 'apple_music';
}

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
}

interface Activity {
  type: number;
  name: string;
  state: string;
  session_id: string;
  details: string;
  application_id: string;
}

interface DiscordStatusData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  spotify?: MusicData;
  listening_to_spotify: boolean;
  activities: Activity[];
}

interface DiscordApiResponse {
  success: boolean;
  data: DiscordStatusData;
}

interface DiscordStatus {
  isOnline: boolean;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  statusColor: string;
  statusClass: string;
  statusText: string;
  isListeningToMusic: boolean;
  musicData?: MusicData;
}

const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID;
if (!DISCORD_ID) {
  throw new Error('NEXT_PUBLIC_DISCORD_ID is not set');
}
const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_ID}`;
const LANYARD_WS_URL = 'wss://api.lanyard.rest/socket';

export function useDiscordStatus() {
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus>({
    isOnline: false,
    status: 'offline',
    statusColor: '#80848e',
    statusClass: 'text-muted-foreground',
    statusText: 'Offline',
    isListeningToMusic: false,
  });

  const wsRef = useRef<WebSocket | null>(null);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'online':
        return '#23a55a';
      case 'idle':
        return '#f0b232';
      case 'dnd':
        return '#f23f43';
      case 'offline':
        return '#80848e';
      default:
        return '#80848e';
    }
  };

  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'online':
        return 'text-success';
      case 'idle':
        return 'text-warning';
      case 'dnd':
        return 'text-danger';
      case 'offline':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'online':
        return 'available';
      case 'idle':
        return 'away';
      case 'dnd':
        return 'busy';
      case 'offline':
        return 'offline';
      default:
        return 'offline';
    }
  };

  const safeWebSocketSend = (message: Record<string, unknown>) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify(message));
        return true;
      } catch (error) {
        console.error('Failed to send WebSocket message:', error);
        return false;
      }
    }
    return false;
  };

  const updateStatus = useCallback((data: DiscordStatusData) => {
    // Check for Spotify
    const isListeningToSpotify = data.listening_to_spotify && !!data.spotify;

    // Check for Apple Music
    const appleMusicActivity = data.activities.find(
      activity => activity.type === 2 && activity.name.includes('Apple Music')
    );
    const isListeningToAppleMusic = !!appleMusicActivity;

    // Determine if listening to any music
    const isListeningToMusic = isListeningToSpotify || isListeningToAppleMusic;

    // Extract music data with standardized format
    let musicData: MusicData | undefined;

    if (isListeningToSpotify && data.spotify) {
      musicData = {
        song: data.spotify.song,
        artist: data.spotify.artist,
        platform: 'spotify',
      };
    } else if (isListeningToAppleMusic && appleMusicActivity) {
      musicData = {
        song: appleMusicActivity.details || 'Unknown Song',
        artist: appleMusicActivity.state || 'Unknown Artist',
        platform: 'apple_music',
      };
    }

    setDiscordStatus({
      isOnline: data.discord_status !== 'offline',
      status: data.discord_status,
      statusColor: getStatusColor(data.discord_status),
      statusClass: getStatusClass(data.discord_status),
      statusText: getStatusText(data.discord_status),
      isListeningToMusic,
      musicData,
    });
  }, []);

  // Initial fetch
  useEffect(() => {
    const fetchInitialStatus = async () => {
      try {
        const response = await fetch(LANYARD_API_URL);
        const data: DiscordApiResponse = await response.json();

        if (data.success && data.data.discord_user) {
          updateStatus(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch Discord status:', error);
      }
    };

    fetchInitialStatus();
  }, [updateStatus]);

  // WebSocket connection
  useEffect(() => {
    const connectWebSocket = () => {
      // Close existing connection if it exists
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }

      wsRef.current = new WebSocket(LANYARD_WS_URL);

      wsRef.current.addEventListener('open', () => {
        console.log('Discord WebSocket connected');
      });

      wsRef.current.addEventListener('message', event => {
        try {
          const data = JSON.parse(event.data);

          // Handle initial heartbeat response
          if (event.data === '{"op":1,"d":{"heartbeat_interval":30000}}') {
            // Subscribe to user updates
            safeWebSocketSend({
              op: 2,
              d: {
                subscribe_to_id: DISCORD_ID,
              },
            });

            // Set up heartbeat
            heartbeatIntervalRef.current = setInterval(() => {
              safeWebSocketSend({
                op: 3,
                d: {
                  heartbeat_interval: 30000,
                },
              });
            }, 30000);
          }

          // Handle presence updates
          if (data.t === 'PRESENCE_UPDATE' && data.d) {
            const presenceData: DiscordStatusData = {
              discord_user: data.d.discord_user,
              discord_status: data.d.discord_status,
              spotify: data.d.spotify,
              listening_to_spotify: !!data.d.spotify,
              activities: data.d.activities || [],
            };
            updateStatus(presenceData);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      });

      wsRef.current.addEventListener('close', () => {
        console.log('Discord WebSocket disconnected, reconnecting...');
        // Reconnect after 5 seconds
        setTimeout(connectWebSocket, 5000);
      });

      wsRef.current.addEventListener('error', error => {
        console.error('Discord WebSocket error:', error);
      });
    };

    connectWebSocket();

    // Cleanup
    return () => {
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [updateStatus]);

  return discordStatus;
}
