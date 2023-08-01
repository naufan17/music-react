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
    const grant_type = 'authorization_code';
    const clientId = '0f2090965310456cbf20af448ed99024';
    const redirectUri = 'localhost:3000';
    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
      grant_type: grant_type,
      code: code,
      client_id: clientId,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier
    });

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', {
        body: body
      });
      localStorage.setItem('access_token', response.data.access_token);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async function getProfile() {
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
