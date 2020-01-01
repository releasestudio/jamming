import React, { useContext } from 'react';
import './Playlist.css';
import TrackList from './TrackList/TrackList';
import Spotify from '../../../util/Spotify';
import {Context} from '../../../util/Context';

export default function NewPlaylist (props) {
    const {newPlaylistName, setNewPlaylistName, newPlaylistTracks, setNewPlaylistTracks, setSearchOrEdit, searchOrEdit} = useContext(Context);

    function saveNewPlaylist(){
        const trackUris = newPlaylistTracks.map(track => track.uri)
        Spotify.saveNewPlaylist(newPlaylistName, trackUris).then(()=> setSearchOrEdit(searchOrEdit + "1"));
        setNewPlaylistName('New Playlist')
        setNewPlaylistTracks([]);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    return ( 
        <div className="Playlist">
            <div className="plHeader">
                <input className="playlistName" value ={newPlaylistName} placeholder={newPlaylistName} onChange={(e)=>{setNewPlaylistName(e.target.value)}}/>
                <button className="playlistSave" onClick={saveNewPlaylist} >Save in Spotify</button>
            </div>
            <TrackList tracks={newPlaylistTracks} />
        </div>
    );

}