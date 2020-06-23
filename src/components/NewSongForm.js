import React, { useState } from 'react'

const NewSongForm = ({addSong}) => {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }
  return (  
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Song title</label>
      <input type="text" name="title" id="title" value={title} onChange={ (e) => setTitle(e.target.value) }/>
      <input type="submit" value="Add song"/>
    </form>
  )
}
export default NewSongForm;