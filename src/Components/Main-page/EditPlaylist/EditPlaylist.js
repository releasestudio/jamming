import React, { useContext } from 'react';
import '../NewPlaylist/Playlist.css';
import TrackList from '../TrackList/TrackList';
import {Context} from '../../../util/Context';
import '../NewPlaylist/Playlist.css';
import Spotify from '../../../util/Spotify';

export default function EditPlaylist(props) {
    const {selectedPlaylistTracks} = useContext(Context);
    const {selectedPlaylistName} = useContext(Context);

    function deleteSpotifyPlaylist(){
        Spotify.deletePlaylist(selectedPlaylistTracks.id)
    }
    
    return ( 
        <div className="Playlist">
            <div className="NameAndSave">
                <h2 className="playlistName">{selectedPlaylistName}</h2>
                <button className="Playlist-delete" onClick={deleteSpotifyPlaylist}>Delete Playlist</button>
            </div>
            <TrackList tracks={selectedPlaylistTracks} />
        </div>
    );
}