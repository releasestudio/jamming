import React, { useEffect } from 'react';
import './Connect.css';
import Spotify from '../../util/Spotify';

export default function Connect (props) {
    
    useEffect(() => {
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        console.log("expiresInMatch: " + expiresInMatch)
        if (accessTokenMatch && expiresInMatch) {
            window.localStorage.setItem('spotifyAccessToken', accessTokenMatch[1]);
            const expiresIn = Number(expiresInMatch[1]);

            new Date().getTime()

            setTimeout(()=> window.localStorage.removeItem('spotifyAccessToken'), expiresIn * 1000);
            window.location.assign(Spotify.redirectUri+"mainpage");

        };
    }, [])

    function spotifyConnect(){
        window.localStorage.removeItem('spotifyAccessToken');
        Spotify.getAccessToken();
    }

    return (
        <div className="ConnectBox">
            <h3>
                Create new Spotify playlists by searching for new songs or selecting tracks 
                from your existing playlsits.
            </h3>
            {/* <img className="spotifApiScreenshot" src={require('./SpotAPI-Screenshot.png')} alt="spotifApiScreenshot" /> */}
            <video className="spotifApiScreenshot" type="video/mp4" src={require('./SpotifAPI-Demo.mp4')} autoPlay loop muted />
            <div className="buttons">
                <button className="ConnectButton" onClick={spotifyConnect}>Connect to spotify</button>
            </div>
            <p>SpotifAPI is a React JS app created by Clement Barbu.
                The main purpose of this app is to demonstrated a good understanding of ReactJS and API interaction.
            </p>
        </div>
    )
}