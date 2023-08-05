import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Lists from "../components/Lists"
import HeaderPlaylist from "../components/HeaderPlaylist"

export default function Playlists() {
    const [Playlists, setPlaylists] = useState([]);
    const [Tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getPlaylist();    
    }, []);

    const getPlaylist = async () => {
        let accessToken = localStorage.getItem('access_token');

        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
              Authorization: 'Bearer ' + accessToken
            }
        });
        setPlaylists(response.data);
        setTracks(response.data.tracks.items);
        setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div>
            <section id="playlist-header">
                <a href="#" onClick={() => navigate(-1)}>
                    <h2 className="title-section"><i className="fa-solid fa-arrow-left"></i></h2>
                </a>
                {loading ? ( 
                    <div className="loading-spinner"></div>
                ) : (
                    <HeaderPlaylist
                        id = {Playlists.id}
                        title ={Playlists.name}
                        image ={Playlists.images[0].url}
                    />  
                )}
            </section>
            <section id="playlist-song">
                <h2 className="title-section">Songs in Playlist</h2>
                <Lists
                    Tracks = {Tracks}
                />
            </section>
        </div>
    );
}