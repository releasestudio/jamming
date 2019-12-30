import React, { useState, useEffect, useContext } from 'react';
import './PlaylistSelector.css';
import Spotify from '../../../util/Spotify';
import {Context} from '../../../util/Context';

export default function PlaylistSelector (props) {
    const [playlistsList, setPlaylistsList] = useState([]);
    const {searchOrEdit, setSearchOrEdit, setSelectedPlaylistName, setSelectedPlaylistTracks, setSelectedPlaylistId } = useContext(Context);

    useEffect(() => {
            Spotify.getPlaylists().then(results =>{
                setPlaylistsList(results)

            });
    }, [searchOrEdit])

    function changeSelectedPl(e){
        let newName = e.target.name;
        setSearchOrEdit('edit')
        setSelectedPlaylistName(newName);
        let id = e.target.id;
        setSelectedPlaylistId(id)
        Spotify.getPlaylistTracks(id).then(trackList =>{
            setSelectedPlaylistTracks(trackList)
        })
        
    }

    return (
        <div className="PlaylistSelectorBox">
            {
                playlistsList.map(playlist => {
                    return <button key={playlist.plId} id={playlist.plId} className="PlaylistButton" name={playlist.plName} onClick={changeSelectedPl} >{playlist.plName}</button>;
                })
            }
        </div>
    );
}