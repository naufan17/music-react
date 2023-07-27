import React from "react";
import axios from 'axios';

import Song from "../components/Song"
import Playlist from "../components/Playlist"

export default class Home extends React.Component {
  state = {
    songs: [],
    playlists: [],
    searchQuery: '',
    filteredData: [],
  }

  componentDidMount() {
    this.getAllSong();
    this.getAllPlaylist();
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  getAllSong = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/songs', {mode:'cors'});
      this.setState({ songs: response.data.songs });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getAllPlaylist = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/playlists', {mode:'cors'});
      this.setState({ playlists: response.data.playlists });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      if (searchQuery.trim() === '') {
        this.setState({ filteredData: [] });
      } else {
        this.filterData();
      }
    });
  };

  filterData = () => {
    const { songs, searchQuery } = this.state;
    const filteredData = songs.filter((song) => song.title.toLowerCase().includes(searchQuery.toLowerCase()));
    this.setState({ filteredData });
  };

  handleOutsideClick = (event) => {
    const searchBar = document.getElementById('searchBar');
    if (searchBar && !searchBar.contains(event.target)) {
      this.setState({ filteredData: [] });
    }
  };

  render() {
    const { songs, playlists, searchQuery, filteredData } = this.state;

    return (
      <div>
        <div className="search-bar">
          <input type="search" id="searchBar" value={ searchQuery } onChange={ this.handleSearch } placeholder="Cari lagu"/>
            {filteredData.map((song) => {
              return(
                <div className="search-option">
                {song.title}
              </div>
              )
            })}
        </div> 
        <section id="all-songs">
          <h2 className="title-section">All Songs</h2>
          <div className="list">
            {songs.map((song) => {
              return(
                <Song
                  title= {song.title}
                  artists= {song.artists}
                />
              )
            })}
          </div>
        </section> 
        <section id="most-played-songs">
          <h2 className="title-section">Most Played Songs</h2>
          <div className="list">
          {songs.map((song) => {
              return(
                <Song
                  title= {song.title}
                  artists= {song.artists}
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
                <Playlist 
                  title= {playlist.title}
                />
              )
            })}
          </div>
        </section>
      </div>
    );
  }
}