import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchOrEdit, setSearchOrEdit] = useState('search');
    const [newPlaylistName, setNewPlaylistName] = useState([]);
    const [newPlaylistTracks, setNewPlaylistTracks] = useState([]);
    const [editPlaylist, setEditPlaylist] = useState([]);
    const [selectedPlaylistName, setSelectedPlaylistName] = useState("New Playlist");
    const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState([]);
    
    return (
        <Context.Provider value={{ 
            searchResult, setSearchResult, 
            newPlaylistName, setNewPlaylistName,
            newPlaylistTracks, setNewPlaylistTracks,
            searchOrEdit, setSearchOrEdit,
            editPlaylist, setEditPlaylist,
            selectedPlaylistName, setSelectedPlaylistName,
            selectedPlaylistTracks, setSelectedPlaylistTracks

        }} >

            {children}

        </Context.Provider>
    )
} 