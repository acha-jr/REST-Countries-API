import * as BsIcons from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "./Header.css";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h2>Where in the world?</h2>

      <p onClick={handleTheme}>
        {theme === "light" ? (
          <>
            <BsIcons.BsMoon />
            Dark Mode
          </>
        ) : (
          <>
            <BsIcons.BsSun />
            Light Mode
          </>
        )}
      </p>
    </header>
  );
};

export default Header;
