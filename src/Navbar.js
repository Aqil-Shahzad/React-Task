import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="main">
      <nav className="Navbar">
        <ul >
          <li>
            <NavLink className="NavbarLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="NavbarLink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="NavbarLink" to="/Contactus">
              contact
            </NavLink>
          </li>
          <li>
            <NavLink className="NavbarLink" to="/information/aqil">
              Aqil
            </NavLink>
          </li>
          <li>
            <NavLink className="NavbarLink" to="/information/qasim">
              Qasim
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
