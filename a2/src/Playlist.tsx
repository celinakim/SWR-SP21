import React, { useState, ChangeEvent } from 'react';
import Song from './Song';

const Playlist = () => {

    const [songs, setSongs] = useState<{title: string; artist: string }[]>([]);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    const addTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.currentTarget.value;
        setTitle(newTitle); 
    };

    const addArtist = (e: ChangeEvent<HTMLInputElement>) => {
        const newArtist = e.currentTarget.value;
        setArtist(newArtist);
    };
    
    const updatePlaylist = () => {
        const info: {title: string; artist: string;} = {title, artist};
        setTitle("");
        setArtist("");
        setSongs([...songs, info]);
    }

    return (
        <div>
            <h3><em>{title ? title : ""}</em> - {artist ? artist : ""}</h3>

            <label>Title: </label>
            <input type = "text" value = {title} onChange = {addTitle} placeholder = "What's the title?"></input>

            <label>Artist: </label>
            <input type = "text" value = {artist} onChange = {addArtist} placeholder = "Who sang it?"></input>
 
            <button onClick = {updatePlaylist}> Update Your Playlist!</button>

            <h1>Current Playlist : )</h1>
            {songs.map((song) => {
                return (
                    <Song info = {song}/>
                );
            })}
        </div>
    )
  
};
export default Playlist;