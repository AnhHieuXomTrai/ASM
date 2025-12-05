import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/home"></Link>
      <NavLink to="/Tour"></NavLink>
      <NavLink to="/About"></NavLink>
      <NavLink to="/Add"></NavLink>
      <NavLink to="/list"></NavLink>
      <NavLink to="/Edit"></NavLink>
      <NavLink to="/Register"></NavLink>
      <NavLink to="/login"></NavLink>
    </nav>
  );
}

export default Navigation;
