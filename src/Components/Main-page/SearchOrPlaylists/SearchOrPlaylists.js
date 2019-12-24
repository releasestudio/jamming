import React, {useContext} from 'react';
import './SearchOrPlaylists.css'
import SearchResults from '../SearchResults/SearchResults';
import EditPlaylist from '../EditPlaylist/EditPlaylist';
import {Context} from '../../../util/Context';

export default function SearchOrPlaylists(props){
    
    const { searchOrEdit } = useContext(Context);
    

    return (
        <div className="SearchOrPlaylistBox">
            {
            searchOrEdit === 'search'?
                <SearchResults />
            :
                <EditPlaylist />
            }      
        </div>
    )
}