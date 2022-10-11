import React from 'react'

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa2'>
        <input className='pa3 ' 
            type='search' 
            placeholder='search robots'
            onChange={searchChange}>

         </input>
        </div>
    );
}

export default SearchBox;