import React from "react";

export default function HeaderPlaylist({id = 'IDPL_1', title = 'Playlist', image = 'https://media.istockphoto.com/id/1472421626/id/foto/rendering-3d-headphone-nirkabel-dengan-latar-belakang-biru.jpg?s=1024x1024&w=is&k=20&c=CrEj-FFvhiYjodBKrqf7HzMIjApIiUfIdvl5jTQf39E='}) {
    return (
        <div className="playlist-song" key={id}>
            <div className="playlist-picture">
                <img src={image} alt="Playlist"/>
            </div>
            <div className="playlist-details">
                <h2 className="title">{title}</h2>
            </div>
        </div>  
    );    
}