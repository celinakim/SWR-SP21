import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Other from './Other';
import Filtered from './Filtered';


function App() {

  const [search, setSearch] = useState("");
  const [newFriend, setFriend] = useState<string>("");
  const [addFriend, setAdd] = useState<string[]>([]);


  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setFriend(e.target.value);
  }

  const add = () => {
    setAdd([...addFriend, newFriend]);
    setFriend("");
  }
  return (
    <div className="App">
        <label> Search: </label>
        <input type = "text" onChange = {searchHandler} value = {search}></input>

        <label> Add friend!: </label>
        <input type = "text" onChange = {update} value = {newFriend}></input>
        <button onClick = {add}>Add</button>

        <h3>Results: </h3>
        <Filtered search = {search} friends = {addFriend} />

        <h3>Other: </h3>
        <Other search = {search} friends = {addFriend} />
        
    </div>
  );
}

export default App;
