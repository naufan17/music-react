import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeMusic from "./pages/Music/Home";
import SongMusic from "./pages/Music/Song";
import PlaylistMusic from "./pages/Music/Playlist";
import Dashboard from "./pages/Spotify/Dashboard";
import TrackSpotify from "./pages/Spotify/Track";
import PlaylistSpotify from "./pages/Spotify/Playlist";

import './assets/css/App.css';
import './assets/css/stylesheet.css';
import './assets/css/responsive.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomeMusic}/>
        <Route path="/music/song/:id" Component={SongMusic}/>
        <Route path="/music/playlist/:id" Component={PlaylistMusic}/>
        <Route path="/music/playlist/song/:id" Component={SongMusic}/>
        <Route path="/spotify" Component={Dashboard}/>
        <Route path="/spotify/track/:id" Component={TrackSpotify}/>
        <Route path="/spotify/playlist/:id" Component={PlaylistSpotify}/>
      </Routes>
    </Router>
  );
}