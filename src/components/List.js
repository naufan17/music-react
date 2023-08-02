import React from "react";

export default function ListSong({song, url='song'}) {
    return (
        <div>
            {song.map((song) => {
                const link = `${url}/${song.song_id}`;

                return (
                    <div className="song-list" key={song.song_id}>
                        <a href={link}>
                            <div id="song-1" className="player-song">
                                <h3 className="title">{song.title}</h3>
                                <p className="artist">{song.artists.map(artist => artist).join(', ')}</p>
                                <p className="album">{song.album}</p>
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