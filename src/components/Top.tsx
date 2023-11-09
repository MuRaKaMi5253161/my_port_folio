import React from "react";
import './css/Top.css'

// img
import profileIcon from "../img/NLBO5135.png";
import artwork from "../img/art.png";
import sound from "../img/makeSongs.png";
import app from "../img/programing.png";

const Top: React.FC = () => {
    return (
        <div id="profile">
            <div className="profileTitle">
                <h1 className="profileTitleText">D_R Atelier</h1>
            </div>
            <div className="profileIcon">
                <img src={profileIcon} className="profileIconClass" alt="NLBO5135.png" />
            </div>
            <div className="profileExp">
                <text>
                    musicProduction
                </text>
            </div>
            <div className="menu">
                    <button className="menuIconButton"><img src={sound} className="menuIcon" alt="sound.png" /></button>
            </div>
            <div className="profileExp">
                <text>
                    applications
                </text>
            </div>
            <div className="menu">
                <button className="menuIconButton"><img src={app} className="menuIcon" alt="app.png" /></button>
            </div>
            <div className="profileExp">
                <text>
                    artworks
                </text>
            </div>
            <div className="menu">
                <button className="menuIconButton"><img src={artwork} className="menuIcon" alt="art.png" /></button>
            </div>
            <div className="menu">
                <input type="submit" className="inputFormSubmit" name="inputFormSubmit" value="contact(お問い合わせ)"></input>
            </div>
        </div>
    );
};

export default Top;