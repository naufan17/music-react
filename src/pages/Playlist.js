import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import List from "../components/List"
import HeaderPlaylist from "../components/HeaderPlaylist"

export default function Playlist() {
    const [Playlists, setPlaylists] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getPlaylist();    
    }, []);

    const getPlaylist = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/playlists/${id}`, {mode:'cors'});
          setPlaylists(response.data);
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
                {Playlists.map((playlist) => {
                    return(
                        <HeaderPlaylist
                            id = {playlist.playlist_id}
                            title={playlist.title}
                            image={playlist.image}
                        />  
                    )
                })}
            </section>
            <section id="playlist-song">
                <h2 className="title-section">Songs in Playlist</h2>
                {Playlists.map((playlist) => {
                    return(
                        <List
                            song= {playlist.song}
                            url = {'song'}
                        />
                    )
                })}
            </section>
        </div>
    );
}