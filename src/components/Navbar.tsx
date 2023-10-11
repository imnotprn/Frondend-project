import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="src/assets/logo.svg" alt="" />
        <p>LearnHub</p>
      </div>
      <div className={classes.menuList}>
        <p>Login</p>
        <p>Register</p>
      </div>
    </div>
  );
};
export default Navbar;
