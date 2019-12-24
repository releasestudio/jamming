import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchOrEdit, setSearchOrEdit] = useState('search');
    const [newPlaylistName, setNewPlaylistName] = useState("New Playlist");
    const [newPlaylistTracks, setNewPlaylistTracks] = useState([]);
    const [editPlaylist, setEditPlaylist] = useState([]);
    const [selectedPlaylistName, setSelectedPlaylistName] = useState();
    const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState([]);
    
    return (
        <Context.Provider value={{ 
            searchResult, setSearchResult,
            searchOrEdit, setSearchOrEdit,
            newPlaylistName, setNewPlaylistName,
            newPlaylistTracks, setNewPlaylistTracks,
            editPlaylist, setEditPlaylist,
            selectedPlaylistName, setSelectedPlaylistName,
            selectedPlaylistTracks, setSelectedPlaylistTracks

        }} >

            {children}

        </Context.Provider>
    )
} 