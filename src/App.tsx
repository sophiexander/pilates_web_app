import React from "react";
import logo from "./logo.svg";
import pilates_logo from "./assets/pilates.png";
import pilates1_logo from "./assets/pilates_1.png";
import pilates2_logo from "./assets/pilates_2.png";
import pilates3_logo from "./assets/pilates_3.png";
import pilates4_logo from "./assets/pilates_4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="div-background-img">
        <img src={pilates2_logo} className="icon" alt="logo" />
        <img src={pilates1_logo} className="icon" alt="logo" />
        <img src={pilates_logo} className="icon" alt="logo" />

        <img src={pilates4_logo} className="icon" alt="logo" />
        <img src={pilates3_logo} className="icon" alt="logo" />
      </div>

      <footer>
        <a
          href="https://www.flaticon.com/free-icons/pilates"
          title="pilates icons"
        >
          Pilates icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/exercise"
          title="exercise icons"
        >
          Exercise icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/meditation"
          title="meditation icons"
        >
          Meditation icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
