import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import PlaylistSelector from './PlaylistSelector/PlaylistSelector';
import SearchOrPlaylists from './SearchOrPlaylists/SearchOrPlaylists';
import NewPlaylist from './NewPlaylist/NewPlaylist';


function Mainpage (){

  return (
    <div className="mainPage">
      <SearchBar />
      <PlaylistSelector />
      <div className="App-playlist">
      
        <SearchOrPlaylists />

        <NewPlaylist />
      
      </div>
    </div>
  )
}
export default Mainpage;