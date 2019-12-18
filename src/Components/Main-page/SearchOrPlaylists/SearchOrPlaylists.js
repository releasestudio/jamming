import React, {useContext} from 'react';
import './SearchOrPlaylists.css'
import SearchResults from '../SearchResults/SearchResults';
import EditPlaylist from '../EditPlaylist/EditPlaylist';
import {Context} from '../../../util/Context';

export function SearchOrPlaylists(props){
    
    const {searchResult, searchOrEdit} = useContext(Context);

    return (
        <div className="SearchOrPlaylistBox">
            {
            searchOrEdit === 'search'?
                <SearchResults searchTracks={searchResult} onAdd={props.onAdd} />
            :
                <EditPlaylist onAdd={props.onAdd} selectedPl={props.selectedPl} editTracks={props.editTracks} onNameChange={props.onNameChange} playlistName={props.playlistName} />
            }      
        </div>
    )
}