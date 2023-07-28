import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function Song() {
    const [Songs, setSongs] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getSong();    
    }, []);
    
    const getSong = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/songs/${id}`, {mode:'cors'});
          setSongs(response.data.song);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <section id="player">
            <a href="javascript:history.back()">
                <h2 className="title-section"><i className="fa-solid fa-arrow-left"></i></h2>
            </a>
            {Songs.map((song) => {
                return(
                    <div className="player-song">
                        <div className="song-picture">
                            <img src={song.image} alt="Album Art"/>
                        </div>
                        <div className="song-details">
                            <h2 className="title">{song.title}</h2>
                            <h3 className="artist">{song.artists}</h3>
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
                )
            })}
        </section>
    );
}