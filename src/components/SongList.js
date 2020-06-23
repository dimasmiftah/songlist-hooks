import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3},
  ])
  const [age, setAge] = useState(20)
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])
  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])
  const addSong = (title) => {
    // const id = songs.length + 1
    setSongs([...songs, {title, id: v4()}])
  }
  return (  
    <div className="song-list">
      <ul>
      {songs.map((song) => (<li key={song.id}>{song.title}</li>))}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age + 1)}>Add 1 to age {age}</button>
    </div>
  );
}

export default SongList;