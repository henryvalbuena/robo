import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='bn pa3 bg-white'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}
 
export default SearchBox;