import React from "react";

export default function Card({id, title, artists, image, url}) {
    const link = `${url}/${id}`;

    return (
        <div className="card" key={id}>
            <a href={link}>
                <img src={image} alt="{title}"/>
                <div className="details">
                    <h3 className="title">{title}</h3>
                    <p className="artist">{artists}</p>
                </div>
            </a>
        </div>      
    );    
}