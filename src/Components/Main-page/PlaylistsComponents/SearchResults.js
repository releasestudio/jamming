import React, {useContext} from 'react';
import TrackList from './TrackList/TrackList';
import './Playlist.css';
import {Context} from '../../../util/Context';

export default function SearchResults(props){
    const {searchResult} = useContext(Context);

    return (
        <div className="Playlist">
            <div className="plHeader">
                <h2 className="playlistName">Search Results</h2>
            </div>
            <TrackList tracks={searchResult} />
        </div>
    );
}