import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchOrEdit, setSearchOrEdit] = useState('search');
    const [newPlaylist, setNewPlaylist] = useState([]);
    
    return (
        <Context.Provider value={{ 
            searchResult, setSearchResult, 
            newPlaylist, setNewPlaylist, 
            searchOrEdit, setSearchOrEdit,
        }} >

            {children}

        </Context.Provider>
    )
} 