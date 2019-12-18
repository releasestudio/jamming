import React, {useState} from 'react';
import './App.css';
import {SearchBar} from '../Main-page/SearchBar/SearchBar';
import NewPlaylist from '../Main-page/NewPlaylist/NewPlaylist';
import Spotify from '../../util/Spotify';
import Connect from '../Connect/Connect';
import PlaylistSelector from '../Main-page/PlaylistSelector/PlaylistSelector';
import {SearchOrPlaylists} from '../Main-page/SearchOrPlaylists/SearchOrPlaylists';
import {ContextProvider} from '../../util/Context';

function App(){
      const [editPlaylistTracks, setEditPlaylistTracks] = useState([]);
      const [spotifyConnection, setSpotifyConnection] = useState(false);
      const [selectPlaylist, setSelectPlaylist] = useState("New Playlist");

  function changeEditPlaylistTracks (tracks){
    setEditPlaylistTracks(tracks)
  }

  function spotifyConnect(){
    Spotify.getAccessToken();
    setSpotifyConnection(true);
  }

  function setSelectedPl(name){
    setSelectPlaylist(name);
  }

  return(
    <div>
      <ContextProvider>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        {
          spotifyConnection?
          (
            <div>
              <SearchBar />
              <PlaylistSelector changeTracksEdit={changeEditPlaylistTracks} setSelectedPl={setSelectedPl} />
              <div className="App-playlist">
              
                <SearchOrPlaylists editTracks={editPlaylistTracks} selectedPl={selectPlaylist} />

                <NewPlaylist />
              
              </div>
            </div>
          )
          :
          <Connect onConnect={spotifyConnect} />
        }
        </div>
      </ContextProvider>
    </div>
    
  );
}

export default App;
