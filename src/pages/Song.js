import React from "react";

export default function Song() {
    return (
        <section id="player">
            <a href="javascript:history.back()">
                <h2 class="title-section"><i class="fa-solid fa-arrow-left"></i></h2>
            </a>
            <div class="player-song">
                <div class="song-picture">
                    <img src="https://media.istockphoto.com/id/1141254399/id/foto/potret-wanita-kulit-hitam-muda-mendengarkan-musik-di-bawah-lampu-neon.jpg?s=1024x1024&w=is&k=20&c=PUCe0edhnblHz3yOn_2cQXlyrNBQOS-0L2ub_JJGUiE=" alt="Album Art"/>
                </div>
                <div class="song-details">
                    <h2 class="title">Song Title</h2>
                    <h3 class="artist">Artist</h3>
                </div>
                <div class="controls">
                    <button class="previous-button"><i class="fa-solid fa-backward-step"></i></button>
                    <button id="playPauseButton" class="play-button"><i class="fa-solid fa-play"></i></button>
                    <button class="next-button"><i class="fa-solid fa-forward-step"></i></button>
                    <button class="add-song-button"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="audio-player">
                    <div class="time-display">
                        <span id="currentTime">0:00</span>
                    </div>
                    <div class="progress-bar">
                        <div class="filled-progress"></div>
                    </div>
                    <div class="time-display">
                        <span id="duration">0:00</span>
                    </div>
                </div>
            </div>
        </section>
    );
}