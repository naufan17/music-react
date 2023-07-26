import React from "react";

import '../assets/css/App.css';
import '../assets/css/stylesheet.css';
import '../assets/css/responsive.css';

export default function Home() {
  return (
    <div>
    <section id="player">
        <a href="javascript:history.back()">
            <h2 Name="title-section"><i Name="fa-solid fa-arrow-left"></i></h2>
        </a>
        <div Name="player-song">
            <div Name="song-picture">
                <img src="https://media.istockphoto.com/id/1141254399/id/foto/potret-wanita-kulit-hitam-muda-mendengarkan-musik-di-bawah-lampu-neon.jpg?s=1024x1024&w=is&k=20&c=PUCe0edhnblHz3yOn_2cQXlyrNBQOS-0L2ub_JJGUiE=" alt="Album Art"/>
            </div>
            <div Name="song-details">
                <h2 Name="title">Song Title</h2>
                <h3 Name="artist">Artist</h3>
            </div>
            <div Name="controls">
                <button Name="previous-button"><i Name="fa-solid fa-backward-step"></i></button>
                <button id="playPauseButton" Name="play-button"><i Name="fa-solid fa-play"></i></button>
                <button Name="next-button"><i Name="fa-solid fa-forward-step"></i></button>
                <button Name="add-song-button"><i Name="fa-solid fa-plus"></i></button>
            </div>
            <div Name="audio-player">
                <div Name="time-display">
                    <span id="currentTime">0:00</span>
                </div>
                <div Name="progress-bar">
                    <div Name="filled-progress"></div>
                </div>
                <div Name="time-display">
                    <span id="duration">0:00</span>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}