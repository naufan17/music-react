import React from "react";

export default function ListSong(song, url) {
    return (
        <div>
            {song.song.map((song) => {
                return (
                    <div className="song-list">
                        <a href={song.song_id}>
                            <div id="song-1" className="player-song">
                                <h3 className="title">{song.title}</h3>
                                <p className="artist">{song.artists}</p>
                                <p className="time">{song.duration}</p>
                                <div className="controls-song">
                                    <button id="delete-song" className="delete-song-button"><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </a>
                    </div>    
                )                
            })}
        </div>
    );    
}