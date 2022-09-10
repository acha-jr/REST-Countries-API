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
    </ThemeProvider>
  );
}

export default App;
