import React, {useState, useContext} from 'react';
import './SearchBar.css';
import Spotify from '../../../util/Spotify';
import { Context } from '../../../util/Context';

export function SearchBar(){
    const [term, setTerm] = useState('');
    const {setSearchResult, setSearchOrEdit} = useContext(Context);

    function search(){
        Spotify.search(term).then(results=>{
            setSearchResult(results);
            setSearchOrEdit('search');
        });
    };

    function handleTermChange(e){
        setTerm(e.target.value)
    };

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}