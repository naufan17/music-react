import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import HeaderSong from "../components/HeaderSong";

export default function Track() {
    const [Tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getTrack();    
    }, []);
    
    const getTrack = async () => {
        let accessToken = localStorage.getItem('access_token');

        try {
          const response = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
            headers: {
              Authorization: 'Bearer ' + accessToken
            }
        });
        setTracks(response.data);
        setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <section id="player">
            <a href="#" onClick={() => navigate(-1)}>
                <h2 className="title-section"><i className="fa-solid fa-arrow-left"></i></h2>
            </a>
            {loading ? ( 
              <div className="loading-spinner"></div>
            ) : (
              <HeaderSong
                  id = {Tracks.id}
                  title = {Tracks.name}
                  artists = {Tracks.artists.map(artist => artist.name).join(', ')}
                  image = {Tracks.album.images[0].url}
                />
            )}
        </section>
    );
}