// async function fetchData() {
//     try {
//         const response = await fetch('http://localhost:3000/songs', {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*'
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Request failed');
//         }

//         const data = await response.json();
//         const dataContainer = document.getElementById('songList');
//         dataContainer.innerHTML = '';
    
//         data.forEach(item => {
//           const listItem = document.createElement('p');
//           listItem.textContent = item.title;
//           dataContainer.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }
  
// fetchData();

// var audio = new Audio('abadi.mp3'); // Replace with your own audio file path
    
// var playPauseButton = document.getElementById('playPauseButton');
// var filledProgress = document.querySelector('.filled-progress');
// var currentTime = document.getElementById('currentTime');
// var duration = document.getElementById('duration');

// playPauseButton.addEventListener('click', function() {
//     if (audio.paused) {
//         audio.play();
//         playPauseButton.innerHTML = '<i class="fa-solid fa-pause">';
//     } else {
//         audio.pause();
//         playPauseButton.innerHTML = '<i class="fa-solid fa-play">';
//     }
// });

// audio.addEventListener('timeupdate', function() {
//     var progress = (audio.currentTime / audio.duration) * 100;
//     filledProgress.style.width = progress + '%';

//     var minutes = Math.floor(audio.currentTime / 60);
//     var seconds = Math.floor(audio.currentTime % 60);
//     currentTime.textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);

//     var durationMinutes = Math.floor(audio.duration / 60);
//     var durationSeconds = Math.floor(audio.duration % 60);
//     duration.textContent = durationMinutes + ':' + (durationSeconds < 10 ? '0' + durationSeconds : durationSeconds);
// });

// function deleteSong() {
//     var element = document.getElementById("song");
//     if (element.style.display === "none") {
//         element.style.display = "block";
//     } else {
//         element.style.display = "none";
//     }
// }
