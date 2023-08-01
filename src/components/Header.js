import { React, useEffect, useState } from "react";
import axios from 'axios';

import Option from "../components/Option"

export default function Header() {
  const [allSongs, setAllSongs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  

  useEffect(()=>{
    getAllSong();
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const getAllSong = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/songs', {mode:'cors'});
      setAllSongs(response.data.songs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword.trim() === '') {
      setFilteredData([])
    } else {
      setFilteredData(allSongs.filter((song) => song.title.toLowerCase().includes(keyword.toLowerCase())))
    }
  };

  const handleOutsideClick = () => {
    setFilteredData([])
  };

  function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
  
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
  
    return base64encode(digest);
  }

  const handleLogin = () => {
    const clientId = '0f2090965310456cbf20af448ed99024';
    const response_type = 'code';
    const redirectUri = 'localhost:3000/dashboard';
    const scope = 'user-read-private user-read-email';
    let state = generateRandomString(16);
    let codeVerifier = generateRandomString(128);
    let codeChallenge = generateCodeChallenge(codeVerifier)
  
    localStorage.setItem('code_verifier', codeVerifier);
  
    let args = new URLSearchParams({
      client_id: clientId,
      response_type: response_type,
      redirect_uri: redirectUri,
      scope: scope,
      state: state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge
    });
  
    window.location = 'https://accounts.spotify.com/authorize?' + args;
  };

  return (
    <header className="header">
        <div className="search-bar">
            <input type="search" onChange={handleSearch} placeholder="Cari lagu"/>
            <button className="login-button" onClick={handleLogin}>Login</button>
            {filteredData.map((song) => {
                return(
                <Option
                    id = {song.song_id}
                    title = {song.title}
                    artists = {song.artists}
                    url = {'song'}
                />
                )
            })}
        </div> 
    </header>
  );
}