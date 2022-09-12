import { Link, useParams } from "react-router-dom";
import "../components/Details.css";
import { MdOutlineKeyboardBackspace as Back } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

const Details = () => {
  const param = useParams();

  const [details, setDetails] = useState([]);

  const fetchCountry = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/alpha/${param.id}`
    );
    const country = await data.json();
    setDetails(country);
  };

  useEffect(() => {
    details.forEach((e) => (document.title = e.name.common));
  });

  // Did some kind of cheat here because the page wasn't re-rendering after clicking the border links
  const [url, setUrl] = useState("");
  const handleClick = (y) => {
    setUrl(y);
  };

  useEffect(() => {
    fetchCountry();
  }, [url]);

  function nName(obj) {
    for (let p in obj) {
      return obj[p].common;
    }
  }
  function curr(obj) {
    for (let p in obj) {
      return obj[p].name;
    }
  }
  function lang(obj) {
    for (let p in obj) {
      return obj[p];
    }
  }

  return details.map((props, index) => {
    const {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    } = props;

    return (
      <div className='details' key={index}>
        <Link to='/'>
          <Back /> Back
        </Link>

        <div className='country'>
          <img src={flags.png} alt='' />
          <section>
            <h1>{name.common}</h1>
            <div className='country-info'>
              <p>
                Native Name: <span>{nName(name.nativeName) || "-"}</span>
              </p>
              <p>
                Population: <span>{population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion || "-"}</span>
              </p>
              <p>
                Capital: <span>{(capital || ["-"]).join(", ")}</span>
              </p>
              <p>
                Top Level Domain: <span>{tld[0]}</span>
              </p>
              <p>
                Currencies: <span>{curr(currencies) || "-"}</span>
              </p>
              <p>
                Language: <span>{lang(languages) || "-"}</span>
              </p>
            </div>

            <div className='borders'>
              Border Countries:
              <div className='border-countries'>
                {borders
                  ? borders.map((x, index) => (
                      <Link
                        onClick={() => handleClick(x)}
                        to={`/${x}`}
                        key={index}
                      >
                        {x}
                      </Link>
                    ))
                  : "-"}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  });
};

export default Details;
