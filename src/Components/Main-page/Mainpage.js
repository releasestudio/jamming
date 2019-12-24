import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import PlaylistSelector from './PlaylistSelector/PlaylistSelector';
import SearchOrPlaylists from './SearchOrPlaylists/SearchOrPlaylists';
import NewPlaylist from './NewPlaylist/NewPlaylist';
import {ContextProvider} from '../../util/Context';


function Mainpage (){

  return (
    <div className="mainPage">
      <ContextProvider>
        <SearchBar />
        <PlaylistSelector />
        <div className="App-playlist">
        
          <SearchOrPlaylists />

          <NewPlaylist />
        
        </div>
      </ContextProvider>
    </div>
  )
}
export default Mainpage;