import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

import List from "../components/List"

export default function Playlist() {
    const [Playlists, setPlaylists] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getPlaylist();    
    }, []);

    const getPlaylist = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/playlists/${id}`, {mode:'cors'});
          setPlaylists(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div>
            <section id="playlist-header">
                <a href="javascript:history.back()">
                    <h2 className="title-section"><i className="fa-solid fa-arrow-left"></i></h2>
                </a>
                {Playlists.map((playlist) => {
                    return(
                        <div className="playlist-song">
                            <div className="playlist-picture">
                                <img src="https://media.istockphoto.com/id/1472421626/id/foto/rendering-3d-headphone-nirkabel-dengan-latar-belakang-biru.jpg?s=1024x1024&w=is&k=20&c=CrEj-FFvhiYjodBKrqf7HzMIjApIiUfIdvl5jTQf39E=" alt="Playlist"/>
                            </div>
                            <div className="playlist-details">
                                <h2 className="playlist-title">{playlist.title}</h2>
                            </div>
                        </div>                            
                    )
                })}
            </section>
            <section id="playlist-song">
                <h2 className="title-section">Songs in Playlist</h2>
                {Playlists.map((playlist) => {
                    return(
                        <List
                            song= {playlist.song}
                            url= {'song'}
                        />
                    )
                })}
            </section>
        </div>
    );
}