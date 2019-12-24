import React, { useContext } from 'react';
import '../NewPlaylist/Playlist.css';
import TrackList from '../TrackList/TrackList';
import {Context} from '../../../util/Context';

export default function EditPlaylist() {
    const {selectedPlaylistTracks} = useContext(Context);
    const {selectedPlaylistName} = useContext(Context);
    
    return ( 
        <div className="Playlist">
            <h2 className="SearchTitle">{selectedPlaylistName}</h2>
            <TrackList tracks={selectedPlaylistTracks} />
        </div>
    );
}