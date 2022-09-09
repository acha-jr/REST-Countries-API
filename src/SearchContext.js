import { useState, createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = (inputValue) => {
    setSearchTerm(inputValue);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
