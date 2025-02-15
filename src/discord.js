export function initializeDiscord() {
    const webSocket = new WebSocket('wss://api.lanyard.rest/socket');
    const discordID = '381767483100626945';
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

        // Update Spotify status
        if (data.listening_to_spotify) {
            spotifySongElement.innerText = `${
                data.spotify.song
            } by ${data.spotify.artist.replaceAll(';', ',')}`;
        } else {
            spotifySongElement.innerText = 'Nothing!';
        }
        latestAnime.innerText = data.kv.latestAnime;
        const repoName = data.kv.githubrepo || 'Nothing!';
        const repoLink = data.kv.githubrepolink || '#';
        githubRepo.innerHTML = `<a href="${repoLink}" target="_blank">${repoName}</a>`;
    }

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