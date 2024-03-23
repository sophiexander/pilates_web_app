import "uikit/dist/css/uikit.css";
import React from "react";
import pilates_logo from "../../assets/pilates.png";
import pilates1_logo from "../../assets/pilates_1.png";
import pilates2_logo from "../../assets/pilates_2.png";
import pilates3_logo from "../../assets/pilates_3.png";
import pilates4_logo from "../../assets/pilates_4.png";
import sunset from "../../assets/sunset.jpg";
import logo from "../../assets/Pilates_logo.png";
import Icon from "../Icon";

export default function Header() {
  return (
    <div>
      <div
        className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-column uk-flex-between"
        style={{
          backgroundImage: `url(${sunset})`,
        }}
      >
        <div className="uk-flex uk-flex-row uk-flex-between">
          <div>
            <img
              src={logo}
              className="uk-animation-scale-up"
              alt="logo"
              width={300}
              style={{ padding: "10px 0 0 0" }}
            />
          </div>

          <div
            className="uk-flex uk-flex-row uk-flex-right@m"
            style={{ padding: "0 40px 0 0" }}
          >
            <Icon image={pilates2_logo} linkName="Home" />
            <Icon image={pilates1_logo} linkName="About" />
            <Icon image={pilates_logo} linkName="Timetable" />
            <Icon image={pilates4_logo} linkName="Prices" />
            <Icon image={pilates3_logo} linkName="Contact" />
          </div>
        </div>
        <div className="heading-gradient uk-flex uk-flex-center"></div>
      </div>
    </div>
  );
}
