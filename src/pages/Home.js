import Countries from "../components/Countries";
import "../components/Home.css";
import MainTop from "../components/MainTop";
import { SearchProvider } from "../SearchContext";
import { FilterProvider } from "../FilterContext";

const Home = () => {
  return (
    <main>
      <SearchProvider>
        <FilterProvider>
          <MainTop />
          <Countries />
        </FilterProvider>
      </SearchProvider>
      <footer>
        Challenge by{" "}
        <a href='https://www.frontendmentor.io/'>Frontend Mentor</a>. Coded by{" "}
        <a href='https://github.com/acha-jr'>acha-jr</a>.
      </footer>
    </main>
  );
};

export default Home;
