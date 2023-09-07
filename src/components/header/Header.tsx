import "uikit/dist/css/uikit.css";
import React from "react";
import pilates_logo from "../../assets/pilates.png";
import pilates1_logo from "../../assets/pilates_1.png";
import pilates2_logo from "../../assets/pilates_2.png";
import pilates3_logo from "../../assets/pilates_3.png";
import pilates4_logo from "../../assets/pilates_4.png";
import sunset from "../../assets/sunset.jpg";
import Icon from "../Icon";

export default function Header() {
  return (
    <div
      className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center@m uk-flex-left@l"
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
  );
}
