import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

  return (
    <nav>
      <div className="navItem " id="modules">
        <NavLink to="/">Modules</NavLink>
      </div>
      <div className="navItem id=students">
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );  
}

export default Navbar;
