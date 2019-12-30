import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    //searchResult contains the array of tracks comming back from Spotify after a search.
    const [searchResult, setSearchResult] = useState([]);
    //searchOrEdit determines if the left playlist should display search results or a user playlist if one is selected.
    const [searchOrEdit, setSearchOrEdit] = useState('search');
    //newPlaylistName and newPlaylistTrack respectively containe the name and tracks of the New playlist being created.
    const [newPlaylistName, setNewPlaylistName] = useState("New Playlist");
    const [newPlaylistTracks, setNewPlaylistTracks] = useState([]);
    // selectedPlaylistName, selectedPlaylistTracks and selectedPlaylistId respectively containe the name and 
    // tracks and if of the playlist currently selected in the PlaylistSeletor Component.
    const [selectedPlaylistName, setSelectedPlaylistName] = useState();
    const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState()
    
    return (
        <Context.Provider value={{ 
            searchResult, setSearchResult,
            searchOrEdit, setSearchOrEdit,
            newPlaylistName, setNewPlaylistName,
            newPlaylistTracks, setNewPlaylistTracks,
            selectedPlaylistName, setSelectedPlaylistName,
            selectedPlaylistTracks, setSelectedPlaylistTracks,
            selectedPlaylistId, setSelectedPlaylistId

        }} >

            {children}

        </Context.Provider>
    )
} 