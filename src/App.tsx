import "uikit/dist/css/uikit.css";
import Header from "./components/header/Header";
import Home from "./components/class-planner/Home";
import pilates2_logo from "./assets/pilates_2.png";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="uk-flex-column uk-margin-large" uk-flex>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
