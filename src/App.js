import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Details />} />
        </Routes>
      </Router>
      <footer>
        Challenge by{" "}
        <a href='https://www.frontendmentor.io/'>Frontend Mentor</a>. Coded by{" "}
        <a href='https://github.com/acha-jr'>acha-jr</a>.
      </footer>
    </ThemeProvider>
  );
}

export default App;
