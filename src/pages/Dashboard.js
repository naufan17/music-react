import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dataProfile, setDataProfile] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');

  useEffect(() => {
    getAccessToken();
    getProfile();
  }, []);


  const getAccessToken = async () => {
    const clientId = '0f2090965310456cbf20af448ed99024';
    const redirectUri = 'localhost:3000/dashboard';

    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    });

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      });
      localStorage.setItem('access_token', response.data.access_token);
    } catch (error) {
      console.error('Error', error);
    }
  }

  const getProfile = async () => {
    let accessToken = localStorage.getItem('access_token');
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
      setDataProfile(response)
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <div>
      <h1>Welcome, {dataProfile.name}</h1>
    </div>
  );
};

export default Dashboard;
