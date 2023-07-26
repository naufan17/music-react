import React  from "react";

export default class Playlist extends React.Component {
    render() {
        return (
            <div className="card">
                <a href="/">
                    <img src="https://media.istockphoto.com/id/1472421626/id/foto/rendering-3d-headphone-nirkabel-dengan-latar-belakang-biru.jpg?s=1024x1024&w=is&k=20&c=CrEj-FFvhiYjodBKrqf7HzMIjApIiUfIdvl5jTQf39E=" alt="Playlist 1"/>
                    <div className="details">
                        <h3 className="title">{this.props.title}</h3>
                    </div>
                </a>
            </div>
        );    
    }
}