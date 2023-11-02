import './NavBar.css';
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
    <nav>
        <div>
          <NavLink to="/" activeStyle={null}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/" activeStyle={null}>
            Recommend
          </NavLink>
        </div>
        <div>
          <NavLink to="/" activeStyle={null}>
            Search
          </NavLink>
        </div>
        <div>
          <NavLink to="/" activeStyle={null}>
            MyPage
          </NavLink>
        </div>
    </nav>
    );
  };
  
  export default NavBar;
  