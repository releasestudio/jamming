import React, { useContext } from 'react';
import './Track.css';
import {Context} from '../../../util/Context';

export default function Track(props){
    const {newPlaylist, setNewPlaylist} = useContext(Context);

    function addTrack(){
        let tracks = newPlaylist;
        if (newPlaylist.find(savedTrack => savedTrack.id === props.track.id)){
          return;
        }
        tracks.push(props.track);
        setNewPlaylist(tracks);
      }
    
    function removeTrack(){
        let plTracks = newPlaylist;
        let newPlTracks = plTracks.filter(plTrack => plTrack.id !== props.track.id)
        setNewPlaylist(newPlTracks);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {
            props.isRemoval?
                <button className="Track-action" onClick={removeTrack}>-</button>
            :
                <button className="Track-action" onClick={addTrack}>+</button>
            }
        </div>
    );
}