import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const savedTheme = localStorage.getItem("theme") || "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(savedTheme);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
