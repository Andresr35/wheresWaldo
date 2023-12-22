import { Link } from "react-router-dom";
import "../assets/Nav.css";

const Nav = () => {
  return (
    <nav>
      <h1>Where&apos;s Waldo?</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Leaderboard</li>
      </ul>
    </nav>
  );
};

export default Nav;
