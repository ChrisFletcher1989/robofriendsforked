import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa3 ba b--green bg-lightest-blue'>
        <input type='search'
         placeholder='Search Robots' 
         onChange={searchChange}
         />
         </div>
    );
}

export default SearchBox;
