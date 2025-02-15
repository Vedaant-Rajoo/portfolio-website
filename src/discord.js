export function initializeDiscord() {
    const webSocket = new WebSocket('wss://api.lanyard.rest/socket');
    const discordID = process.env.NEXT_PUBLIC_DISCORD_ID || '381767483100626945';
    if (!discordID) {
        console.error('Discord ID not found in environment variables');
        return;
    }

    function updateStatus(data) {
        const statusElement = document.getElementById('discord-status-highlight');
        const spotifySongElement = document.getElementById('spotify-song');
        const latestAnime = document.getElementById('latestAnime');
        const githubRepo = document.getElementById('github-repo');

        // Update Discord status
        const statusColorMap = {
            online: '#23a55a',
            idle: '#f0b232',
            dnd: '#f23f43',
            offline: '#80848e',
        };
        const statusText = data.discord_status
            ? data.discord_status.replace('dnd', 'Do not disturb')
            : 'Offline';
        statusElement.innerText =
            statusText.charAt(0).toUpperCase() + statusText.slice(1);
        statusElement.style.color = statusColorMap[data.discord_status] || '#80848e';

        // Update Spotify status with truncation
        if (data.listening_to_spotify) {
            const songName = data.spotify.song;
            const artistName = data.spotify.artist.replaceAll(';', ',');
            spotifySongElement.innerHTML = `
                <div class="max-w-full overflow-hidden">
                    <div class="truncate">
                        <span class="font-medium">${songName}</span>
                        <span class="text-stone-500">by</span>
                        <span class="text-emerald-600">${artistName}</span>
                    </div>
                </div>`;
        } else {
            spotifySongElement.innerHTML = '<span class="text-stone-500 italic">Taking a break from music</span>';
        }

        // Update anime status with truncation
        if (data.kv && data.kv.latestAnime) {
            latestAnime.innerHTML = `
                <div class="max-w-full overflow-hidden">
                    <div class="truncate">
                        <span class="font-medium">${data.kv.latestAnime}</span>
                    </div>
                </div>`;
        } else {
            latestAnime.innerHTML = '<span class="text-stone-500 italic">Not watching anything right now</span>';
        }

        // Update GitHub status with truncation
        if (data.kv && data.kv.githubrepo && data.kv.githubrepo !== 'Nothing!') {
            const repoName = data.kv.githubrepo;
            const repoLink = data.kv.githubrepolink || '#';
            githubRepo.innerHTML = `
                <div class="max-w-full overflow-hidden">
                    <div class="truncate">
                        <a href="${repoLink}" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            ${repoName}
                        </a>
                    </div>
                </div>`;
        } else {
            githubRepo.innerHTML = '<span class="text-stone-500 italic">Taking a coding break</span>';
        }
    }

    // Set initial loading states with proper width constraints
    const elements = ['discord-status-highlight', 'spotify-song', 'latestAnime', 'github-repo'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = `
                <div class="max-w-full overflow-hidden">
                    <span class="inline-block animate-pulse">Loading...</span>
                </div>`;
        }
    });

    fetch(`https://api.lanyard.rest/v1/users/${discordID}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((e) => {
            console.log('Initial data:', e);
            if (e.data['discord_user']) {
                updateStatus(e.data);
            }
        })
        .catch((error) => {
            console.error('Fetch error:', error);
            // Handle error states elegantly
            elements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = '<span class="text-stone-500 italic">Temporarily unavailable</span>';
                }
            });
        });

    webSocket.addEventListener('open', () => {
        if (process.env.NODE_ENV === 'development') {
            console.log('WebSocket connected');
        }
    });

    webSocket.addEventListener('error', (error) => {
        console.error('WebSocket connection error:', error);
    });

    webSocket.addEventListener('close', (event) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`WebSocket closed with code ${event.code}`);
        }
    });

    webSocket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);

        if (event.data === '{"op":1,"d":{"heartbeat_interval":30000}}') {
            webSocket.send(
                JSON.stringify({ op: 2, d: { subscribe_to_id: discordID } }),
            );
            setInterval(
                () =>
                    webSocket.send(
                        JSON.stringify({ op: 3, d: { heartbeat_interval: 30000 } }),
                    ),
                30000,
            );
        }

        if (data.t === 'PRESENCE_UPDATE') {
            updateStatus(data.d);
        }
    });
} 