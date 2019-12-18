import React, { useState, useEffect, useContext } from 'react';
import './PlaylistSelector.css';
import Spotify from '../../../util/Spotify';
import {Context} from '../../../util/Context';

export default function PlaylistSelector (props) {
    const [playlistsList, setPlaylistsList] = useState([]);
    const {setSearchOrEdit} = useContext(Context);

    useEffect(() => {
        Spotify.getPlaylists().then(results =>{
            setPlaylistsList(results)
        })
    }, [])

    function changeSelectedPl(e){
        let newName = e.target.name;
        setSearchOrEdit('edit')


        props.setSelectedPl(newName);
        let id = e.target.id;
        // console.log(`id that is passed to changeSelectedPl is: ${id}`);
        Spotify.getPlaylistTracks(id).then(trackList =>{
            // console.log(trackList);
            props.changeTracksEdit(trackList)
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