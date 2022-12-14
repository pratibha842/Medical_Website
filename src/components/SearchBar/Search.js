import React from 'react';
import "./search.css";
import { useState, useEffect } from 'react';

const Search = () => {
  const [query, setQuery] = useState("");
  const [apiQuery, setApiQuery] = useState("");
  useEffect( () => {
    const timeoutId = setTimeout (() => {
      setApiQuery(query);
    }, 500);

    return () => clearTimeout (timeoutId);
  },[query]);

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };


  return (

    <div className="search-container">
        <input onChange={handleOnChange} value={query} placeholder='search'/>
        <button>Search</button>

        <div className="value_input">
          {apiQuery}
        </div>
    </div>
  )
}

export default Search
