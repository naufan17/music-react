import React from "react";

export default function Card({id = 'IDVD_1', title = 'Song', artists = 'Artist', image = 'https://media.istockphoto.com/id/1141254399/id/foto/potret-wanita-kulit-hitam-muda-mendengarkan-musik-di-bawah-lampu-neon.jpg?s=1024x1024&w=is&k=20&c=PUCe0edhnblHz3yOn_2cQXlyrNBQOS-0L2ub_JJGUiE=', url = 'song'}) {
    const link = `${url}/${id}`;

    return (
        <div className="card" key={id}>
            <a href={link}>
                <img src={image} alt="Song"/>
                <div className="details">
                    <h3 className="title">{title}</h3>
                    <p className="artist">{artists}</p>
                </div>
            </a>
        </div>      
    );    
}