import React from "react";

export default function Card({id, title, artists, image, url}) {
    return (
        <div className="card">
            <a href={url}>
                <img src={image} alt="{title}"/>
                <div className="details" key={id}>
                    <h3 className="title">{title}</h3>
                    <p className="artist">{artists}</p>
                </div>
            </a>
        </div>
    );    
}