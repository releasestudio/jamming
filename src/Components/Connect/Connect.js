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
            window.location.assign("http://localhost:3000/mainpage");

        };
    }, [])

    function spotifyConnect(){
            window.localStorage.removeItem('spotifyAccessToken');
            Spotify.getAccessToken();
    }

    return (
        <div className="ConnectBox">
            <button className="ConnectButton" onClick={spotifyConnect}>Connect to spotify</button> 
        </div>
    )
}