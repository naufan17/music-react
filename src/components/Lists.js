import React from "react";

export default function Lists({Tracks}) {
    console.log(Tracks)
    return (
        <div>
            {Tracks.map((item) => {
                console.log(item.track.name, "|" ,Math.floor(item.track.duration_ms / 60000) + ':' + ((item.track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0'), "|", item.track.artists.map(artist => artist.name).join(', '), "|", item.track.album.name)
                {}
                <div className="song-list" >
                    <a href='/' key={item.track.id}>
                        <div id="song-1" className="player-song">
                            <h3 className="title">{item.track.name}</h3>
                            <p className="artist">{item.track.artists.map(artist => artist.name).join(', ')}</p>
                            <p className="album">{item.track.album.name}</p>
                            <p className="time">{Math.floor(item.track.duration_ms / 60000) + ':' + ((item.track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}</p>
                            <div className="controls-song">
                                <button id="delete-song" className="delete-song-button"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                </div>
            })}
        </div>
    );    
}