import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from "../../components/Card"

const Main = () => {
  const [songTrack, setSongTrack] = useState([]);
  const [songRecommendation, setSongRecommendation] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAccessToken();
    isAccessTokenValid()
    // getTrack();
    getRecommendations();
    getPlaylist();
  }, []);

  const isAccessTokenValid = () => {
    let accessToken = localStorage.getItem('access_token');

    if(accessToken.length < 10) {
      navigate('/');
    }
  };

  const getAccessToken = async () => {
    // Impicit Grant
    const url = window.location.href;
    const queryParams = new URLSearchParams(url.split('#')[1]);
    const accessToken = queryParams.get('access_token');  
  
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
    
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }

    // Authorization ce PKCE

    // const urlParams = new URLSearchParams(window.location.search);
    // let code = urlParams.get('code');

  
    // const clientId = '0f2090965310456cbf20af448ed99024';
    // const redirectUri = 'http://localhost:3000/dashboard';

    // let codeVerifier = localStorage.getItem('code_verifier');
    
    // let body = new URLSearchParams({
    //   grant_type: 'authorization_code',
    //   code: code,
    //   redirect_uri: redirectUri,
    //   client_id: clientId,
    //   code_verifier: codeVerifier
    // });

    // console.log(codeVerifier)

    // try {
    //   const response = await axios.post('https://accounts.spotify.com/api/token', {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: body
    //   });
    //   console.log(response.data.access_token)
    //   localStorage.setItem('access_token', response.data.access_token);
    // } catch (error) {
    //   console.error('Error', error);
    // }
  }

  // const getTrack = async () => {
  //   let accessToken = localStorage.getItem('access_token');
  
  //   try {
  //     const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
  //       headers: {
  //         Authorization: 'Bearer ' + accessToken
  //       },
  //       params: {
  //         time_range: 'short_term',
  //         limit: 10,
  //         offset: 5
  //       },
  //     });
  //     setSongTrack(response.data.items);
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // }

  const getRecommendations = async () => {
    let accessToken = localStorage.getItem('access_token');
    const topTracksIds = [
      '1nYdkPCbHdYi4w7s2L6SHA','0rzaRSujxA0bKyjJl6vHYq','51lPx6ZCSalL2kvSrDUyJc','6XsFgTG4dY768oIB4Dmeu0','2NjbJR8y083mOV59255QSe'
    ];
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/recommendations', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
        params: {
          limit: 10,
          seed_tracks: topTracksIds.join(',')
        },
      });
      setSongRecommendation(response.data.tracks)
    } catch (error) {
      console.error('Error', error);
    }
  }

  const getPlaylist = async () => {
    let accessToken = localStorage.getItem('access_token');
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
      });
      setPlaylist(response.data.items);
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <div>
      {/* <section id="all-songs">
        <h2 className="title-section">Track</h2>
        <div className="list">
          {songTrack.map((song) => {
            return(
              <Card
                id = {song.id}
                title = {song.name}
                artists = {song.artists.map(artist => artist.name).join(', ')}
              />
            )
          })}
        </div>
      </section>  */}
      <section id="all-songs">
        <h2 className="title-section">Recommendations</h2>
        <div className="list">
          {songRecommendation.map((song) => {
            return(
              <Card
                id = {song.id}
                title = {song.name}
                artists = {song.artists.map(artist => artist.name).join(', ')}
                image = {song.album.images[0].url}
                url = {'spotify/track'}
              />
            )
          })}
        </div>
      </section> 
      <section id="your-playlist">
          <h2 className="title-section">Your Playlist</h2>
          <div className="list">
            {playlist.map((playlist) => {
              return(
                <Card
                  id = {playlist.id}
                  title = {playlist.name}
                  image = {playlist.images[0].url}
                  url = {'spotify/playlist'}
                />
              )
            })}
          </div>
        </section>
    </div>
  );
};

export default Main;