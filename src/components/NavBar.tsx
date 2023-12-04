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
    // <div className="nav-bar">
    //   <nav className="uk-navbar-container">
    //     <div className="uk-container">
    //       <div uk-navbar>
    //         <div className="uk-navbar-left">
    //           <ul className="uk-navbar-nav">
    //             <li className="uk-active">
    //               <a onClick={() => handleClick("")}>Home</a>
    //             </li>
    //             <li>
    //               <a href="contact">Parent</a>
    //             </li>
    //             <li>
    //               <a href="#">Item</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
