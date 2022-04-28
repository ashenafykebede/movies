import React from 'react'
import './search.css';
export const Search = ({handleEvent}) => {
  return (
    <div className='search_container'>
      <input onChange={(event)=>handleEvent(event?.target.value)} className="search" placeholder='Search movie by title'/>
    </div>
  )
}

export default Search