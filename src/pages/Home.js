import React from "react";

import Song from "../components/Song"
import Playlist from "../components/Playlist"

export default class Home extends React.Component {
  render() {
    const Songs = [    
      {
        title: "As It Was",
        artists: ["Harry Styles"],
        album: "Harry's House",
        duration: "2:54",
        url: "http://play",
        playCount: 10000000
      },
      {
        title: "Heat Waves",
        artists: ["Glass Animals"],
        album: "Dreamland",
        duration: "3:44",
        url: "http://play",
        playCount: 5000000
      },
      {
        title: "Stay",
        artists: ["The Kid Laroi", "Justin Bieber"],
        album: "Stay",
        duration: "2:04",
        url: "http://play",
        playCount: 3000000
      },
      {
        title: "About Damn Time",
        artists: ["Lizzo"],
        album: "Special",
        duration: "3:32",
        url: "http://play",
        playCount: 2000000
      },
      {
        title: "Enemy",
        artists: ["Imagine Dragons", "JID"],
        album: "Mercury - Act 1",
        duration: "3:03",
        url: "http://play",
        playCount: 1000000
      },
      {
        title: "Levitating",
        artists: ["Dua Lipa"],
        album: "Future Nostalgia",
        duration: "3:32",
        url: "http://play",
        playCount: 500000
      },
      {
        title: "Montero (Call Me by Your Name)",
        artists: ["Lil Nas X"],
        album: "Montero",
        duration: "2:13",
        url: "http://play",
        playCount: 300000
      },
      {
        title: "We Don't Talk About Bruno",
        artists: ["Encanto Cast"],
        album: "Encanto",
        duration: "3:07",
        url: "http://play",
        playCount: 200000
      },
      {
        title: "Bad Habits",
        artists: ["Ed Sheeran"],
        album: "= (Equals)",
        duration: "3:52",
        url: "http://play",
        playCount: 100000
      },
      {
        title: "abcdefu",
        artists: ["Gabe Adams-Spalding"],
        album: "abcdefu",
        duration: "3:22",
        url: "http://play",
        playCount: 50000
      }
    ];

    const Playlists = [
      {
        title: 'Top Song',
        song: [    
          {
            title: "As It Was",
            artists: ["Harry Styles"],
            album: "Harry's House",
            duration: "2:54",
            url: "http://play",
            playCount: 10000000
          },
          {
            title: "Heat Waves",
            artists: ["Glass Animals"],
            album: "Dreamland",
            duration: "3:44",
            url: "http://play",
            playCount: 5000000
          }
        ]
      }
    ];

    return (
      <div>
        <div className="search-bar">
          <input type="search" placeholder="Cari lagu"/>
        </div> 
        <section id="all-songs">
          <h2 className="title-section">All Songs</h2>
          <div className="list">
            {Songs.map((song) => {
              return(
                <Song
                  title= {song.title}
                  artists= {song.artists}
                  // album= {song.album}
                  // duration= {song.duration}
                  // url= {song.url}
                  // playCount= {song.playCount}
                />
              )
            })}
          </div>
        </section> 
        <section id="most-played-songs">
          <h2 className="title-section">Most Played Songs</h2>
          <div className="list">
          {Songs.map((song) => {
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
            {Playlists.map((playlist) => {
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