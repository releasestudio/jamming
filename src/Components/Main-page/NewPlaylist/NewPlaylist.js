import React, { useContext } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import Spotify from '../../../util/Spotify';
import {Context} from '../../../util/Context';

export default function NewPlaylist (props) {
    const {newPlaylistName, setNewPlaylistName} = useContext(Context);
    const {newPlaylistTracks, setNewPlaylistTracks} = useContext(Context);

    function saveNewPlaylist(){
        const trackUris = newPlaylistTracks.map(track => track.uri)
        Spotify.saveNewPlaylist(newPlaylistName, trackUris)
        setNewPlaylistName('New Playlist');
        setNewPlaylistTracks([]);
    }

    return ( 
        <div className="Playlist">
            <div className="NameAndSave">
                <input placeholder={newPlaylistName} onChange={(e)=>{setNewPlaylistName(e.target.value)}}/>
                <button className="Playlist-save" onClick={saveNewPlaylist} >SAVE IN SPOTIFY</button>
            </div>
            <TrackList tracks={newPlaylistTracks} />
        </div>
    );

}