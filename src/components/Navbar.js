import { Link, NavLink } from "react-router-dom";

// styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-left">
          <Link to="/" className="brand">
            <h1>OONSORU</h1>
          </Link>
          <Searchbar />
          <Link to="/add" className="nav-add">
            Add Recipe
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/register" className="nav-item-register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
