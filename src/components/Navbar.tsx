import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/skills">
        Skills
      </NavLink>
      <NavLink to="/experience" >
        Experience
      </NavLink>
      <NavLink to="/education">
        Education
      </NavLink>
      <NavLink to="/person">
        Person
      </NavLink>
    </nav>
  );
};

export default Navbar;
