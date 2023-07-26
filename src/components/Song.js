import React from "react";

export default class Song extends React.Component {
    render() {
        return (
            <div className="card">
                <a href="/">
                    <img src="https://media.istockphoto.com/id/1141254399/id/foto/potret-wanita-kulit-hitam-muda-mendengarkan-musik-di-bawah-lampu-neon.jpg?s=1024x1024&w=is&k=20&c=PUCe0edhnblHz3yOn_2cQXlyrNBQOS-0L2ub_JJGUiE=" alt="Top Song 1"/>
                    <div className="details">
                        <h3 className="title">{this.props.title}</h3>
                        <p className="artist">{this.props.artists}</p>
                    </div>
                </a>
            </div>
        );    
    }
}