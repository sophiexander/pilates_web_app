import "uikit/dist/css/uikit.css";
import Header from "./components/header/Header";
import Organiser from "./components/class-planner/Organiser";
import pilates2_logo from "./assets/pilates_2.png";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="uk-child-width-1@s uk-light uk-flex-column" uk-flex>
        <Header />
        <Organiser />
      </div>
    </div>
  );
}

export default App;
