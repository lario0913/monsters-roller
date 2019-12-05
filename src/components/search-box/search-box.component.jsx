import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder, handlechange}) => (
    <input 
    className='search'
    type = 'text'
    placeholder = {placeholder}
    onChange = {handlechange}
    />
)