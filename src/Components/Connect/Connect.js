import React from 'react';
import './Connect.css';

export default function Connect (props) {
    
    return (
        <div className="ConnectBox">
            <button className="ConnectButton" onClick={props.onConnect}>Connect with spotify</button> 
        </div>
    )
}