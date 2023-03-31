import React from "react";
import pilates_logo from "./assets/pilates.png";
import pilates1_logo from "./assets/pilates_1.png";
import pilates2_logo from "./assets/pilates_2.png";
import pilates3_logo from "./assets/pilates_3.png";
import pilates4_logo from "./assets/pilates_4.png";
import "./App.css";
import Footer from "./Footer";
import Icon from "./Icon";

function App() {
  return (
    <div className="App">
      <div className="div-background-img">
        <Icon image={pilates2_logo}/>
        <Icon image={pilates1_logo}/>
        <Icon image={pilates_logo}/>
        <Icon image={pilates4_logo}/>
        <Icon image={pilates3_logo}/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
