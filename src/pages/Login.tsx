import { FormEvent, useState } from "react";
import classes from "./Login.module.css";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await login(username, password);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <h1 style={{ color: "#FF731D", fontSize: "36px" }}>Login</h1>
      <div className={classes.loginContainer}>
        <div className={classes.inputGroup}>
          <label>Username:</label>
          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              fontSize: "20px",
              color: "#7f8588",
              borderColor: "#7f8588",
            }}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classes.inputGroup}>
          <label>Password:</label>
          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              fontSize: "20px",
              color: "#7f8588",
              borderColor: "#7f8588",
            }}
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className={classes.login_btn} type="submit" value="Login" />
        <NavLink
          to="/register"
          style={{
            textDecoration: "none",
            color: "#848c92",
            textAlign: "center",
          }}
        >
          {`Don't have an account? Register`}
        </NavLink>
      </div>
    </form>
  );
};

export default Login;
