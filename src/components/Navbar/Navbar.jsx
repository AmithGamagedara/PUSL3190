import "./Navbar.css";
import logo from "../../assets/SLK Website.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Events</li>
        <li>Ranking</li>
        <li>Learning</li>
      </ul>

      <div className="language">
        <span>En</span>
      </div>

        <button>
          <span>Sign Up</span>
        </button>
    </div>
  );
}

export default Navbar;
