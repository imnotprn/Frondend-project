import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.img}>
        <img src="https://raw.githubusercontent.com/brightnc/frontend-project/f97552546279c6b12d323855afcd6a3fcf29e23c/src/assets/logo.svg"></img>
      </div>
      <div>
        <button className={classes.LinkBottom}> Login</button>
        <button className={classes.PrimaryBottom}> Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
