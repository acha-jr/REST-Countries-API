import { AiOutlineSearch } from "react-icons/ai";
import { CgChevronDown } from "react-icons/cg";
import { useState, useContext } from "react";
import SearchContext from "../SearchContext";
import FilterContext from "../FilterContext";

const MainTop = () => {
  return (
    <div className='top'>
      <Search />
      <Filter />
    </div>
  );
};

const Search = () => {
  const { search } = useContext(SearchContext);

  return (
    <div className='search'>
      <AiOutlineSearch style={{ fontSize: 20 }} />
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
};

const Filter = () => {
  const regions = [
    "All",
    "Africa",
    "Americas",
    "Antartica",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const { filter, filterCountries } = useContext(FilterContext);

  return (
    <div className='select-box'>
      <p onClick={handleDropdown}>
        Filter by Region
        <CgChevronDown />
      </p>
      {dropdown && (
        <ul>
          {regions.map((region, index) => (
            <li key={index} onClick={() => filterCountries(region)}>
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainTop;
