import React, {useContext} from 'react';
import './SearchOrPlaylists.css'
import SearchResults from '../SearchResults/SearchResults';
import EditPlaylist from '../EditPlaylist/EditPlaylist';
import {Context} from '../../../util/Context';

export default function SearchOrPlaylists(props){
    
    const {searchResult, searchOrEdit, editPlaylist, selectedPlaylistName} = useContext(Context);
    

    return (
        <div className="SearchOrPlaylistBox">
            {
            searchOrEdit === 'search'?
                <SearchResults tracks={searchResult} />
            :
                <EditPlaylist tracks={editPlaylist} selectedPlaylistName={selectedPlaylistName} />
            }      
        </div>
    )
}