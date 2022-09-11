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
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    setCountry(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { searchTerm } = useContext(SearchContext);
  const { filter } = useContext(FilterContext);

  const searchArr = country.filter((val) => {
    if (!searchTerm) {
      return val;
    } else if (
      val.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  const filterArr = country.filter((val) => {
    if (filter === "All") {
      return val;
    } else if (val.region.toLowerCase().includes(filter.toLowerCase())) {
      return val;
    }
  });

  let arr = searchTerm ? searchArr : filterArr;

  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className='loading' />
      ) : (
        arr.map((props, index) => {
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
      {arr.length === 0 ? !loading && <h2>Country Not Found</h2> : null}
    </>
  );
};

export default Countries;
