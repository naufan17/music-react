import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Song from "./pages/Song";
import Playlist from "./pages/Playlist";
import Dashboard from "./pages/Dashboard";
import Track from "./pages/Track";
import Playlists from "./pages/Playlists";

import './assets/css/App.css';
import './assets/css/stylesheet.css';
import './assets/css/responsive.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/song/:id" Component={Song}/>
        <Route path="/playlist/:id" Component={Playlist}/>
        <Route path="/playlist/song/:id" Component={Song}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/track/:id" Component={Track}/>
        <Route path="/playlists/:id" Component={Playlists}/>
      </Routes>
    </Router>
  );
}