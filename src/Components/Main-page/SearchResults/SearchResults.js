import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

export default function SearchResults(props){

    return (
        <div className="SearchResults">
            <h2 className="SearchTitle">Search Results</h2>
            <TrackList tracks={props.searchTracks} onAdd={props.onAdd} />
        </div>
    );
}