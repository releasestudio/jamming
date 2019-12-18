import React from 'react';
import './Connect.css';
import Spotify from '../../util/Spotify';

export default function Connect (props) {
    
    function spotifyConnect(){
        if(!window.localStorage.getItem('spotifyAccessToken')){
            Spotify.getAccessToken();
            window.location.assign("http://localhost:3000/mainpage");
        }
        window.location.assign("http://localhost:3000/mainpage");
      }

    return (
        <div className="ConnectBox">
            <button className="ConnectButton" onClick={spotifyConnect}>Connect with spotify</button> 
        </div>
    )
}