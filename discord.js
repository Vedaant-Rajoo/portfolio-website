// const webSocket = new WebSocket("wss://api.lanyard.rest/socket");
// const discordID = "381767483100626945";

// function updateStatus(data) {
//   const statusElement = document.getElementById("discord-status-highlight");
//   const spotifySongElement = document.getElementById("spotify-song");
//   const spotifyArtistElement = document.getElementById("spotify-artist");

//   // Update Discord status
//   const statusColorMap = {
//     online: "#23a55a",
//     idle: "#f0b232",
//     dnd: "#f23f43",
//     offline: "#80848e"
//   };
//   const statusText = data.discord_status ? data.discord_status.replace('dnd', 'Do not disturb') : 'Offline';
//   statusElement.innerText = statusText.charAt(0).toUpperCase() + statusText.slice(1);
//   statusElement.style.color = statusColorMap[data.discord_status] || "#80848e";

//   // Update Spotify status
//   if (data.listening_to_spotify) {
//     spotifySongElement.innerText = `listening to ${data.spotify.song}`;
//     spotifyArtistElement.innerText = ` by ${data.spotify.artist.replaceAll(";", ",")}`;
//   } else {
//     spotifySongElement.innerText = "";
//     spotifyArtistElement.innerText = "";
//   }
// }

// fetch(`https://api.lanyard.rest/v1/users/${discordID}`)
//   .then(response => response.json())
//   .then(e => { 
//     if (e.data["discord_user"]) {
//       updateStatus(e.data);
//     }
//   });

// webSocket.addEventListener("message", event => {
//   const data = JSON.parse(event.data);

//   if (event.data === '{"op":1,"d":{"heartbeat_interval":30000}}') {
//     webSocket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: discordID }}));
//     setInterval(() => webSocket.send(JSON.stringify({ op: 3, d: { heartbeat_interval: 30000 }})), 30000);
//   }

//   if (data.t === "PRESENCE_UPDATE") {
//     updateStatus(data.d);
//   }
// });
// // Select the element that triggers the hover effect
// const navbarName = document.querySelector('#navbarName'); // Replace with your actual element ID or class

// // Select the element to show/hide
// const statusElement = document.querySelector('#discord-status');

// // Add hover event listeners
// navbarName.addEventListener('mouseover', () => {
//   gsap.to(statusElement, { duration: 0.5, autoAlpha: 1 }); // Fade in
// });

// navbarName.addEventListener('mouseout', () => {
//   gsap.to(statusElement, { duration: 0.5, autoAlpha: 0 }); // Fade out
// });
