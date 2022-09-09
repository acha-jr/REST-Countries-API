import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Countries.css";
import SearchContext from "../SearchContext";
import FilterContext from "../FilterContext";

const Countries = () => {
  return (
    <div className='countries'>
      <Country />
    </div>
  );
};

const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries = await data.json();

    setCountry(countries);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { searchTerm } = useContext(SearchContext);
  const { filter } = useContext(FilterContext);

  const searchArray = country.filter((val) => {
    if (!searchTerm) {
      return val;
    } else if (
      val.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  const filterRegion = country.filter((val) => {
    if (filter === "All") {
      return val;
    } else if (val.region.toLowerCase().includes(filter.toLowerCase())) {
      return val;
    }
  });

  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className='loading' />
      ) : (
        filterRegion.map((props, index) => {
          const { flags, name, population, region, capital } = props;
          return (
            <div className='card' key={index}>
              <Link to={`/${props.cca3}`}>
                <img src={flags.png} alt={`${name.common} flag`} />
                <div className='info'>
                  <h4>{name.common}</h4>
                  <p>
                    Population:{" "}
                    <span>{population.toLocaleString() || "-"}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                  <p>
                    Capital: <span>{(capital || ["-"]).join(", ")}</span>
                  </p>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </>
  );
};

export default Countries;
