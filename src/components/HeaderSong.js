import React from "react";

export default function HeaderSong({id = "IDVD_1", title = 'Song', artists = 'Artist', image = 'https://media.istockphoto.com/id/1141254399/id/foto/potret-wanita-kulit-hitam-muda-mendengarkan-musik-di-bawah-lampu-neon.jpg?s=1024x1024&w=is&k=20&c=PUCe0edhnblHz3yOn_2cQXlyrNBQOS-0L2ub_JJGUiE='}) {
    return (
        <div className="player-song" key={id}>
            <div className="song-picture">
                <img src={image} alt="Song"/>
            </div>
            <div className="song-details">
                <h2 className="title">{title}</h2>
                <h3 className="artist">{artists}</h3>
            </div>
            <div className="controls">
                <button className="previous-button"><i className="fa-solid fa-backward-step"></i></button>
                <button id="playPauseButton" className="play-button"><i className="fa-solid fa-play"></i></button>
                <button className="next-button"><i className="fa-solid fa-forward-step"></i></button>
                <button className="add-song-button"><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="audio-player">
                <div className="time-display">
                    <span id="currentTime">0:00</span>
                </div>
                <div className="progress-bar">
                    <div className="filled-progress"></div>
                </div>
                <div className="time-display">
                    <span id="duration">0:00</span>
                </div>
            </div>
        </div>
    );    
}