import React from "react";

export default function Playlist() {
    return (
        <div>
            <section id="playlist-header">
                <a href="javascript:history.back()">
                    <h2 class="title-section"><i class="fa-solid fa-arrow-left"></i></h2>
                </a>
                <div class="playlist-song">
                    <div class="playlist-picture">
                        <img src="https://media.istockphoto.com/id/1472421626/id/foto/rendering-3d-headphone-nirkabel-dengan-latar-belakang-biru.jpg?s=1024x1024&w=is&k=20&c=CrEj-FFvhiYjodBKrqf7HzMIjApIiUfIdvl5jTQf39E=" alt="Playlist"/>
                    </div>
                    <div class="playlist-details">
                        <h2 class="playlist-title">Playlist</h2>
                    </div>
                </div>
            </section>
            <section id="playlist-song">
                <h2 class="title-section">Songs in Playlist</h2>
                <div class="song-list">
                    <a href="/song">
                        <div id="song-1" class="player-song">
                            <h3 class="title">Song 1</h3>
                            <p class="artist">Artist 1</p>
                            <p class="time">3.14</p>
                            <div class="controls-song">
                                <button id="delete-song" class="delete-song-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                    <a href="/song">
                        <div id="song-2" class="player-song">
                            <h3 class="title">Song 2</h3>
                            <p class="artist">Artist 2</p>
                            <p class="time">3.14</p>
                            <div class="controls-song">
                                <button id="delete-song" class="delete-song-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                    <a href="/song">
                        <div id="song-3" class="player-song">
                            <h3 class="title">Song 3</h3>
                            <p class="artist">Artist 3</p>
                            <p class="time">3.14</p>
                            <div class="controls-song">
                                <button id="delete-song" class="delete-song-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                    <a href="/song">
                        <div id="song-4" class="player-song">
                            <h3 class="title">Song 4</h3>
                            <p class="artist">Artist 4</p>
                            <p class="time">3.14</p>
                            <div class="controls-song">
                                <button id="delete-song" class="delete-song-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                    <a href="/song">
                        <div id="song-5" class="player-song">
                            <h3 class="title">Song 5</h3>
                            <p class="artist">Artist 5</p>
                            <p class="time">3.14</p>
                            <div class="controls-song">
                                <button onclick="deleteSong()" class="delete-song-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}