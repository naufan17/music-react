import { React, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');

  useEffect(() => {
    getAccessToken()
  }, []);


  const getAccessToken = async () => {
    const clientId = '0f2090965310456cbf20af448ed99024';
    const redirectUri = 'localhost:3000';

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
        body: body
      });
      localStorage.setItem('access_token', response.data.access_token);
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <div>
      <h1>Welcome, </h1>
      <p>Email: </p>
    </div>
  );
};

export default Dashboard;
