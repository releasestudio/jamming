import React, { useContext } from 'react';
import './Track.css';
import {Context} from '../../../util/Context';

export default function Track(props){
    const {newPlaylistTracks, setNewPlaylistTracks} = useContext(Context);

    function addTrack(){
        let tracks = newPlaylistTracks;
        if (newPlaylistTracks.find(savedTrack => savedTrack.id === props.key)){
          return;
        }
        tracks.push(props.track);
        setNewPlaylistTracks(tracks);
      }
    
    function removeTrack(){
        let newPlTracks = newPlaylistTracks.filter(plTrack => plTrack.id !== props.key)
        setNewPlaylistTracks(newPlTracks);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {
            props.isRemoval?
                <button className="Track-action" key={props.key} onClick={removeTrack}>-</button>
            :
                <button className="Track-action" key={props.key} onClick={addTrack}>+</button>
            }
        </div>
    );
}