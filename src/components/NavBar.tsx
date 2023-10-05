export interface Props {
  handleClick: (location: string) => void;
}
export default function NavBar({ handleClick }: Props) {
  return (
    <div className="nav-bar uk-flex uk-flex-around uk-padding-small">
      <button className="uk-button button" onClick={() => handleClick("")}>
        Home
      </button>
      <button className="uk-button" onClick={() => handleClick("about")}>
        About Me
      </button>
      <button className="uk-button" onClick={() => handleClick("sessions")}>
        Sessions
      </button>
      <button className="uk-button" onClick={() => handleClick("contact")}>
        Contact
      </button>
    </div>
  );
}
