import React, { useContext } from 'react';
import './Track.css';
import {Context} from '../../../util/Context';

export default function Track(props){
    const {newPlaylistTracks, setNewPlaylistTracks} = useContext(Context);

    function addTrack(){
        if (newPlaylistTracks.find(savedTrack => savedTrack.id === props.track.id)){
          return;
        }
        let newPlTracks = newPlaylistTracks.concat(props.track);
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
        props.dragOver?
        <div className="Track" draggable="true" onDragOver={props.dragOver} onDragStart={props.dragStart}>
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
        :
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