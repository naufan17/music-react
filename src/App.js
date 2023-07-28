import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Song from "./pages/Song";
import Playlist from "./pages/Playlist";

import './assets/css/App.css';
import './assets/css/stylesheet.css';
import './assets/css/responsive.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/song/:id" Component={ Song } />
        <Route path="/playlist/:id" Component={ Playlist } />
      </Routes>
    </BrowserRouter>
  );
}