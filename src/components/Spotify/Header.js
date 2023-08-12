import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Option from "../../components/Option"

export default function Header() {
  const [dataProfile, setDataProfile] = useState([]);
  const [dataProfileImage, setDataProfileImage] = useState([]);
  const [searchSong, setSearchSong] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAccessToken();
    isAccessTokenValid()
    getProfile();
    // getTrack();
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const isAccessTokenValid = () => {
    let accessToken = localStorage.getItem('access_token');

    if(!accessToken) {
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

  const getProfile = async () => {
    let accessToken = localStorage.getItem('access_token');
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me',  {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
      setDataProfile(response.data);
      setDataProfileImage(response.data.images[0].url);  
    } catch (error) {
      console.error('Error', error);
    }
  }

  const handleSearch = async(event) => {
    const keyword = event.target.value;
    let accessToken = localStorage.getItem('access_token');

    if (keyword.trim() === '') {
      setSearchSong([])
    } else {
      try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
          headers: {
            Authorization: 'Bearer ' + accessToken
          },
          params: {
            q: keyword,
            type: 'track',
            limit: 10
          },
        });
        setSearchSong(response.data.tracks.items)
      } catch (error) {
        console.error('Error', error);
      }
    }  
  };

  const handleOutsideClick = () => {
    setSearchSong([])
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="search-bar">
        <input type="search" onChange={handleSearch} placeholder="Cari lagu"/>
        {/* <div className="profile">
          <img src={dataProfileImage} alt=''/>
          <p>{dataProfile.display_name}</p>
        </div> */}
        <div className="dropdown">
          <button className="profile" onClick={toggleDropdown}>
            <img src={dataProfileImage} alt=''/>
            </button>
          {isOpen && (
            <div className="dropdown-content">
              <p>{dataProfile.display_name}</p>
              <button className='logout-button' onClick={handleLogout}>                
                Logout
              </button>
            </div>
          )}
        </div>
        {searchSong.map((song) => {
          return(
            <Option
              id = {song.id}
              title = {song.name}
              artists = {song.artists.map(artist => artist.name).join(', ')}
              url = {'spotify/track'}
            />
          )
        })}
      </div> 
    </header>
  );
};
