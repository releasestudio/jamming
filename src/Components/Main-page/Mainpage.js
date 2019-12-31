import React, { useContext } from 'react';
import SearchBar from './SearchBar/SearchBar';
import PlaylistSelector from './PlaylistSelector/PlaylistSelector';
import NewPlaylist from './PlaylistsComponents/NewPlaylist';
import {Context} from '../../util/Context';
import SearchResults from './PlaylistsComponents/SearchResults';
import SelectedPlaylist from './PlaylistsComponents/SelectedPlaylist';

function Mainpage (){
  const {searchOrEdit} = useContext(Context)

  return (
    <div className="mainPage">
        <SearchBar />
        <PlaylistSelector />
        <div className="App-playlist">
          {
          searchOrEdit === 'edit'?
          <SelectedPlaylist />
          :
          <SearchResults />
          }     
          <NewPlaylist />
        </div>
    </div>
  )
}
export default Mainpage;