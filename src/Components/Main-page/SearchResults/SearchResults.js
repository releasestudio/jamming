import React, {useContext} from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';
import {Context} from '../../../util/Context';

export default function SearchResults(props){
    const {searchResult} = useContext(Context);

    return (
        <div className="SearchResults">
            <h2 className="SearchTitle">Search Results</h2>
            <TrackList tracks={searchResult} />
        </div>
    );
}