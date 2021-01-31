import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist';
import Song from './Song';

function App() {
  return (
    <div className="App">
       {/* testing Song Component */}
        {/* <Song info={{ title: 'Never Gonna Give You Up', artist: 'Rick Astley' }} /> */}
        <Playlist />
    </div>
  );
}

export default App;
