import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useSearch } from '../context/search';

function SearchBar() {
  const [query, setQuery] = useState(''); // State to store the search query
  const [suggestions, setSuggestions] = useState([]); // State to store the suggestions
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const { searchedData, setSearchedData } = useSearch();
  const searchBarRef = useRef(null); // Ref to detect clicks outside

  // Handle input change event
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim()) {
      fetchSuggestions(value); // Fetch suggestions when user types
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  // Fetch suggestions from the server
  const fetchSuggestions = async (query) => {
    setIsLoading(true);

    if (query == "") {
      toast.warn("Enter text ... ")
    }
    else {
      try {
        const response = await fetch(
          `https://luxurystorebackend.onrender.com/search-data?vlabel=${encodeURIComponent(query)}`,
          {
            method: 'GET',
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSuggestions(data); // Update suggestions with the fetched data
          setSearchedData({ ...searchedData, data }); // Set the fetched data in the context
          console.log(data);
        } else {
          setSuggestions([]); // Clear suggestions on error
          setSearchedData({ ...searchedData, data: 'Not Found' }); // Set the fetched data in the context
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle suggestion click event
  const handleSuggestionClick = (suggestion) => {
    if (suggestion.vlink) {
      window.open(suggestion.vlink, '_blank'); // Open the URL in a new tab
    } else {
      alert('Link not available'); // Handle cases where the link is missing
    }
  };

  // Effect to handle clicks outside the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setSuggestions([]); // Clear suggestions
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="my-2 w-full flex relative" ref={searchBarRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border rounded px-4 py-2 border-pink-600 grow"
      />
      <button
        // onClick={() => fetchSuggestions(query)}
        onClick={() => {
          fetchSuggestions(query);
          setSearchedData({ ...searchedData, query });
        }}
        className="text-white px-4 py-2 ml-2 rounded bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
      >
        Search
      </button>

      {suggestions.length > 0 && (
        <div className='bg-[#eeeeee] absolute top-12 w-full'>
          {isLoading && <div className="text-gray-500 p-2">Loading suggestions...</div>}

          {/* Suggestion dropdown */}
          {suggestions.length > 0 && (
            <ul className="bg-white border border-gray-300 shadow-lg max-h-40 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion._id} // Assuming each suggestion has a unique `_id`
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-pink-600"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.vlabel}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
