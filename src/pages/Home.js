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
    </main>
  );
};

export default Home;
