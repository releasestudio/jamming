import React from 'react';

class Mainpage extends React.Component{
      state = {
      newPlaylistName: 'New Playlist',
      searchTracks: [],
      newPlaylistTracks: [],
      editPlaylistTracks: [],
      spotifyConnection: false,
      selectPlaylist: "New Playlist",
      searchOrEdit: "search",
  }

  setEditPlaylistTracks = (tracks) => {
    this.setState({editPlaylistTracks: tracks})
  }

  updateNewPlaylistName=(name)=>{
    this.setState({newPlaylistName: name});
  }

  addTrack=(track)=>{
    let tracks = this.state.newPlaylistTracks;
    if (this.state.newPlaylistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack=(track)=>{
    let plTracks = this.state.newPlaylistTracks;
    let newPlTracks = plTracks.filter(plTrack => plTrack.id !== track.id)
    this.setState({newPlaylistTracks: newPlTracks});
  }

  saveNewPlaylist=()=>{
    const trackUris = this.state.newPlaylistTracks.map(track => track.uri)
    Spotify.saveNewPlaylist(this.state.newPlaylistName, trackUris)
    this.setState({
        newPlaylistName: 'New Playlist',
        newPlaylistTracks: []
      });
  }

  search=(term)=>{
    Spotify.search(term).then(results=>{this.setState({searchTracks: results})});
  }

  spotifyConnect=()=>{
    Spotify.getAccessToken();
    this.setState({spotifyConnection: true});
  }

  setSelectedPl=(name)=>{
    this.setState({selectPlaylist: name})
  }

  setSearchOrEdit=(value)=>{
    this.setState({searchOrEdit: value})
  }
  render (){
    return (
        <div>
          <SearchBar onSearch={this.search} setSearchOrEdit={this.setSearchOrEdit} />
          <PlaylistSelector newPlName={this.state.newPlaylistName} setSearchOrEdit={this.setSearchOrEdit} changeTracksEdit={this.setEditPlaylistTracks} setSelectedPl={this.setSelectedPl} />
          <div className="App-playlist">
          
            <SearchOrPlaylists searchTracks={this.state.searchTracks} onAdd={this.addTrack} editTracks={this.state.editPlaylistTracks} searchOrEdit={this.state.searchOrEdit} selectedPl={this.state.selectPlaylist} />

            <NewPlaylist newPlaylistName={this.state.newPlaylistName} newPlaylistTracks={this.state.newPlaylistTracks} onRemove={this.removeTrack} onNameChange={this.updateNewPlaylistName} onSave={this.saveNewPlaylist} />
          
          </div>
        </div>
    )}
}
export default Mainpage;