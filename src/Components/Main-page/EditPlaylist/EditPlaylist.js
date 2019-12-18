import React from 'react';
import '../NewPlaylist/Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function EditPlaylist(props) {
    
    return ( 
        <div className="Playlist">
            <h2 className="SearchTitle">{props.selectedPl}</h2>
            <TrackList tracks={props.editTracks} onAdd={props.onAdd} />
        </div>
    );
}