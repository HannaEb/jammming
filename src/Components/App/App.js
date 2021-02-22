import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'You and I', artist: 'Lady Gaga', album: 'No idea', id: 1},
                       {name: 'Edge of Glory', artist: 'Lady Gaga', album: 'Who knows', id: 2}],
      playlistName: 'My songs',
      playlistTracks: [{name: 'Delilah', artist: 'Tom Jones', album: 'Some Album', id: 3},
                       {name: 'I love my life', artist: 'Robbie Williams', album: 'New', id: 4},
                       {name: 'Objection', artist: 'Shakira', album: 'Tango', id: 5}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track)
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  removeTrack(track) {
    this.state.playlistTracks = 
        this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {this.setState({searchResults: searchResults})});
  }

  render() {
    return(
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
         <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks} 
                    onRemove={this.removeTrack} 
                    onNameChange={this.updatePlaylistName} />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
