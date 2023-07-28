import React from "react";

export default function Card({id, title, artists, url}) {
    const link = `${url}/${id}`;

    return (
        <a href={link}>
            <div className="search-option">
                {title} - {artists}
            </div>
        </a>      
    );    
}