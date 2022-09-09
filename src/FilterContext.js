import { useState, createContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const filterCountries = (filterOption) => {
    setFilter(filterOption);
  };

  return (
    <FilterContext.Provider value={{ filter, filterCountries }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
