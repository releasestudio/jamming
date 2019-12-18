import React, { useContext, useState } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import Spotify from '../../../util/Spotify';
import {Context} from '../../../util/Context';

export default function NewPlaylist (props) {
    const {newPlaylist, setNewPlaylist} = useContext(Context);
    const [newPlaylistName, setNewPlaylistName] = useState('New Playlist')

    function handleNameChange(e){
        setNewPlaylistName(e.target.value);
    }

    function saveNewPlaylist(){
        const trackUris = newPlaylist.map(track => track.uri)
        Spotify.saveNewPlaylist(newPlaylistName, trackUris)
        setNewPlaylistName('New Playlist');
        setNewPlaylist([]);
      }

    return ( 
        <div className="Playlist">
            <div className="NameAndSave">
                <input placeholder={newPlaylistName} onChange={handleNameChange}/>
                <button className="Playlist-save" onClick={saveNewPlaylist} >SAVE IN SPOTIFY</button>
            </div>
            <TrackList tracks={newPlaylist} onRemove={props.onRemove} isRemoval="true" />
        </div>
    );

}