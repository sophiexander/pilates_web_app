import "uikit/dist/css/uikit.css";
import React from "react";
import pilates_logo from "./assets/pilates.png";
import pilates1_logo from "./assets/pilates_1.png";
import pilates2_logo from "./assets/pilates_2.png";
import pilates3_logo from "./assets/pilates_3.png";
import pilates4_logo from "./assets/pilates_4.png";
import sunset from "./assets/sunset.jpg";
import Footer from "./Footer";
import Icon from "./Icon";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="uk-child-width-1@s uk-light" uk-grid>
        <div
          className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle"
          style={{
            backgroundImage: `url(${sunset})`,
          }}
        >
          <Icon image={pilates2_logo} />
          <Icon image={pilates1_logo} />
          <Icon image={pilates_logo} />
          <Icon image={pilates4_logo} />
          <Icon image={pilates3_logo} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
