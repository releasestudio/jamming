import React, {useState, useContext} from 'react';
import './SearchBar.css';
import Spotify from '../../../util/Spotify';
import { Context } from '../../../util/Context';

export default function SearchBar(){
    const [term, setTerm] = useState('');
    const {setSearchResult, setSearchOrEdit} = useContext(Context);

    function search(){
        if(term){
        Spotify.search(term).then(results=>{
            setSearchResult(results);
            setSearchOrEdit('search');
        });
        }
    };

    function handleTermChange(e){
        setTerm(e.target.value)
    };

    function handleEnter(e){
        if (e.charCode === 13) {
            search();
            e.preventDefault();
        }
      }

    return (
        <div className="SearchBar">
            <div className="searchBox">
                <img className="magnifyingGlass" src={require('./magnifyingglass.png')} alt="search" onClick={search} />
                <input placeholder="Search for a Song, Album, or Artist" onChange={handleTermChange} onKeyPress={handleEnter} />
            </div>
        </div>
    )
}