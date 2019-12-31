import React, { useContext } from 'react';
import './Playlist.css';
import TrackList from './TrackList/TrackList';
import {Context} from '../../../util/Context';
import './Playlist.css';
import Spotify from '../../../util/Spotify';

export default function EditPlaylist(props) {
    const {selectedPlaylistName, selectedPlaylistTracks, selectedPlaylistId, setSearchOrEdit} = useContext(Context);

    function deleteSpotifyPlaylist(){
        Spotify.deletePlaylist(selectedPlaylistId);
        setSearchOrEdit('search');
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }
    
    return ( 
        <div className="Playlist">
            <div className="plHeader">
                <h2 className="playlistName">{selectedPlaylistName}</h2>
                <button className="playlistDelete" onClick={deleteSpotifyPlaylist}>Delete Playlist</button>
            </div>
            <TrackList tracks={selectedPlaylistTracks} />
        </div>
    );
}