const clientId = '4ed839b4fcad4632a8ff9ce8e3ebdbc5';
// const redirectUri = 'https://clemjammspot.surge.sh';
const redirectUri = 'http://localhost:3000/';
// const redirectUri = 'https://jammming-f82b7.firebaseapp.com';


const Spotify = {

    getAccessToken() {
        // console.log("getAccessToken()");
        if(window.localStorage.getItem('spotifyAccessToken')) {
            return window.localStorage.getItem('spotifyAccessToken');
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        console.log("expiresInMatch: " + expiresInMatch)
        if (accessTokenMatch && expiresInMatch) {
            window.localStorage.setItem('spotifyAccessToken', accessTokenMatch[1]);
            const expiresIn = Number(expiresInMatch[1]);

            new Date().getTime()

            setTimeout(()=> window.localStorage.removeItem('spotifyAccessToken'), expiresIn * 1000);
            return window.localStorage.getItem('spotifyAccessToken');
            
        }else {
            const accessUrl = 'https://accounts.spotify.com/authorize?client_id=' + clientId 
            + '&response_type=token&scope=playlist-read-private&redirect_uri=' + redirectUri;
            window.location = accessUrl;
        }
    },

    search(term){
        console.log("search()");
        // console.log('The access token is: ' + this.accessToken);
        return fetch('https://api.spotify.com/v1/search?type=track&q='+ term, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('spotifyAccessToken')}`
            }
            }).then(response => {
            return response.json();
        }).then(jsonResponse =>{
            if (!jsonResponse.tracks){
                return [];
            }
            // console.log(jsonResponse);
            return jsonResponse.tracks.items.map(track=> ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    saveNewPlaylist(plName, trackUris){
        console.log("savePlaylist()");
        console.log(`Playlist name is: ${plName} and trackUris is: ${trackUris}`)
        // console.log(`this.accessToken is: ${this.accessToken}`);
        const header = {Authorization: `Bearer ${window.localStorage.getItem('spotifyAccessToken')}`};
        let userId; 
        return fetch('https://api.spotify.com/v1/me', {headers: header}
        ).then(response => response.json()
        ).then(jsonResponse=> {
            userId = jsonResponse.id;
            // console.log(`userId is: ${userId}`)
            return fetch('https://api.spotify.com/v1/users/'+ userId + '/playlists', {
                headers: header,
                "Content-Type": 'application/json',
                method: 'POST',
                body: JSON.stringify({name: plName})
            }).then(response=>response.json()
                ).then(jsonResponse=> {
                    const playlistId = jsonResponse.id
                    console.log(`playlistId = ${playlistId}`)
                    return fetch('https://api.spotify.com/v1/users/'+ userId + '/playlists/' + playlistId + '/tracks', {
                        headers: header,
                        method: 'POST',
                        body: JSON.stringify({
                            uris: trackUris
                        })
                    });
                })
        })
    },

    getPlaylists(){
        console.log("getPlaylists()");
        const header = {Authorization: `Bearer ${window.localStorage.getItem('spotifyAccessToken')}`};
        let userId; 
        return fetch('https://api.spotify.com/v1/me', {headers: header}
        ).then(response => response.json()
        ).then(jsonResponse=> {
            userId = jsonResponse.id;
            // console.log(`getPlaylistsUserId is: ${userId}`)
            return fetch('https://api.spotify.com/v1/users/'+ userId + '/playlists', {
                headers: header})
            }).then(response=>response.json()
                ).then(jsonResponse =>{
                    if (!jsonResponse.items){
                        return [];
                    }
                    return jsonResponse.items.map(playlist=> ({
                        plId: playlist.id,
                        plName: playlist.name,
                    }));
                });
    },

    getPlaylistTracks(playlistId){
        // console.log("getPlaylistTracks()");
        const thePlaylistId = playlistId;
        let userId;
        const header = {Authorization: `Bearer ${window.localStorage.getItem('spotifyAccessToken')}`};
        return fetch('https://api.spotify.com/v1/me', {headers: header}
        ).then(response => response.json()
        ).then(jsonResponse=> {
            userId = jsonResponse.id;
            // console.log(`getPlaylistsUserId is: ${userId}`)
            return fetch("https://api.spotify.com/v1/users/"+ userId +"/playlists/" + thePlaylistId + "/tracks", {headers: header}
                ).then(response => response.json()
                ).then(jsonResponse =>{
                    // console.log(jsonResponse)
                    // console.log(jsonResponse.items[0].name)
                    return jsonResponse.items.map(track=> ({
                        id: track.track.id,
                        name: track.track.name,
                        album: track.track.album.name,
                        artist: track.track.artists[0].name,
                        uri: track.track.uri
                    }));
                })
        })
        
    },

    deletePlaylist(playlistId){
        const header = {Authorization: `Bearer ${window.localStorage.getItem('spotifyAccessToken')}`};
        return fetch("https://api.spotify.com/v1/playlists/" + playlistId +"/followers", {method: 'DELETE', headers: header});
    }
}
export default Spotify;