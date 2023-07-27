import React from "react";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <a href="/">
                    <img src={this.props.image}/>
                    <div className="details">
                        <h3 className="title">{this.props.title}</h3>
                        <p className="artist">{this.props.artists}</p>
                    </div>
                </a>
            </div>
        );    
    }
}