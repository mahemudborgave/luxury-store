import { createContext, useContext } from 'react';

// Create a context
export const SearchContext = createContext({
  searchedData: {},
});

export const SearchProvider = SearchContext.Provider;

// Custom hook to use the SearchContext
export const useSearch = () => {
  return useContext(SearchContext);
};