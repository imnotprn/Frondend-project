import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <NavLink className={classes.active} to="/">
          LearnHub
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <button className={classes.login_btn} onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={classes.active}>
              Login
            </Link>
            <Link to="/register" className={classes.active}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
