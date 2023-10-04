import Icon from "../Icon";
import pilates_logo from "../../assets/pilates.png";
import pilates1_logo from "../../assets/pilates_1.png";
import pilates2_logo from "../../assets/pilates_2.png";
import pilates3_logo from "../../assets/pilates_3.png";
import pilates4_logo from "../../assets/pilates_4.png";

export default function Home() {
  return (
    <div
      className="home-background uk-padding-large uk-child-width-1-1@s"
      uk-grid
    >
      <div className="uk-card card uk-card-large uk-card-body uk-margin-medium">
        <h3 className="headings">Welcome!</h3>
        <Icon image={pilates1_logo} />
        <p>my studio...</p>
      </div>
      <div className="uk-card uk-card-default uk-card-large uk-card-body uk-margin-medium">
        <h3 className="headings">Classes/price information?</h3>
        <p>my studio...</p>
      </div>
      <div className="uk-card uk-card-default uk-card-large uk-card-body uk-margin-medium">
        <h3 className="headings">About Me</h3>
        <p>my studio...</p>
      </div>
      <div className="uk-card uk-card-default uk-card-large uk-card-body uk-margin-medium">
        <h3 className="headings">Contact info</h3>
        <p>my studio...</p>
      </div>
    </div>
  );
}
