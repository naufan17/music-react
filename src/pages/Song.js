import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import HeaderSong from "../components/HeaderSong";

export default function Song() {
    const [Songs, setSongs] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

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
            <a href="#" onClick={() => navigate(-1)}>
                <h2 className="title-section"><i className="fa-solid fa-arrow-left"></i></h2>
            </a>
            {Songs.map((song) => {
                return(
                    <HeaderSong
                        id = {song.song_id}
                        title = {song.title}
                        artists = {song.artists}
                        image = {song.image}
                    />
                )
            })}
        </section>
    );
}