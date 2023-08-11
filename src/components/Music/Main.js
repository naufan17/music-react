import { React, useEffect, useState } from "react";
import axios from 'axios';

import Card from "../Card"

export default function Main() {
  const [allSongs, setAllSongs] = useState([]);
  const [mostPlayedSongs, setMostPlayedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(()=>{
    getAllSong();
    getMostPlayedSong();
    getAllPlaylist();
  }, []);

  const getAllSong = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/songs', {mode:'cors'});
      setAllSongs(response.data.songs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getMostPlayedSong = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/songs/most-played', {mode:'cors'});
      setMostPlayedSongs(response.data.songs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getAllPlaylist = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/playlists', {mode:'cors'});
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div>
      <section id="all-songs">
        <h2 className="title-section">All Songs</h2>
        <div className="list">
          {allSongs.map((song) => {
            return(
              <Card
                id = {song.song_id}
                title = {song.title}
                artists = {song.artists.map(artist => artist).join(', ')}
                image = {song.image}
                url = {'music/song'}
              />
            )
          })}
        </div>
      </section> 
      <section id="most-played-songs">
        <h2 className="title-section">Most Played Songs</h2>
        <div className="list">
          {mostPlayedSongs.map((song) => {
            return(
              <Card
                id = {song.song_id}
                title = {song.title}
                artists = {song.artists.map(artist => artist).join(', ')}
                image = {song.image}
                url = {'music/song'}
              />
            )
          })}
        </div>
      </section>
      <section id="your-playlist">
        <h2 className="title-section">Your Playlist</h2>
        <div className="list">
          {playlists.map((playlist) => {
            return(
              <Card
                id = {playlist.playlist_id}
                title = {playlist.title}
                image = {playlist.image}
                url = {'music/playlist'}
              />
            )
          })}
        </div>
      </section>
    </div>
  );    
}