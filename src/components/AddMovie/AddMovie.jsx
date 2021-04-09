import React from 'react'

const AddMovie = () => {
  return (
    <div>
      <input placeholder="Title" type="text"/>
      <input placeholder="Image URL" type="text"/>
      <input placeholder="Description" type="text"/>

      <label htmlFor="genre">Choose a genre:</label>
      <select name="genre" id="genre">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  )
}

export default AddMovie
