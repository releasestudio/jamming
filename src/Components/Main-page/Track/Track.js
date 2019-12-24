import React, { useContext } from 'react';
import './Track.css';
import {Context} from '../../../util/Context';

export default function Track(props){
    const {newPlaylistTracks, setNewPlaylistTracks} = useContext(Context);

    function addTrack(){
        let newPlTracks = newPlaylistTracks;
        if (newPlaylistTracks.find(savedTrack => savedTrack.id === props.track.id)){
          return;
        }
        newPlTracks.push(props.track);
        // console.log(newPlTracks)
        setNewPlaylistTracks(newPlTracks);
      }
    
    function removeTrack(){
        let newPlTracks = newPlaylistTracks.filter(plTrack => plTrack.id !== props.track.id)
        setNewPlaylistTracks(newPlTracks);
    }

    function isRemoval(){
        if (newPlaylistTracks.find(savedTrack => savedTrack.id === props.track.id)){
            return true;
        }
        return false;
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {
            isRemoval()?
                <button className="Track-action" onClick={removeTrack}>-</button>
            :
                <button className="Track-action" onClick={addTrack}>+</button>
            }
        </div>
    );
}