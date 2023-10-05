import "uikit/dist/css/uikit.css";
import Header from "./components/header/Header";
import Home from "./components/class-planner/Home";
import pilates2_logo from "./assets/pilates_2.png";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About";
import Sessions from "./components/Sessions";
import Contact from "./components/Contact";
// import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleClick = (location: string) => {
    console.log(location);
    navigate(`/${location}`);
  };

  return (
    <div className="App">
      <div className="uk-flex-column" uk-flex>
        <Header />
        <NavBar handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
