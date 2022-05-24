import classes from "./Login.module.css";
import "../TemplateFull/FormBox.css"
import logo from "../../assets/images/logo.png";
import TemplateFull from "../TemplateFull/TemplateFull";
const Login = () => {
  return (
      <TemplateFull>
    <div className="formBox">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h3>Login</h3>
      <p>Login to Your Account</p>
      <form className={classes.loginForm}>
        <div className={classes.loginRow}>
          <label htmlFor="emailAddress" className={classes.rowLabel}>
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            required
            placeholder="Enter Your Email"
          />
        </div>
        <div className={classes.loginRow}>
          <label htmlFor="password" className={classes.rowLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter Your Password"
          />
        </div>
        <div className={`${classes.loginRow} ${classes.rowDisplay}`}>
          <div className={classes.rememberPlace}>
            <input
              id="remember"
              name="remember"
              className={classes.checkInput}
              type="checkbox"
            />
            <label className={classes.rememberLabel} htmlFor="remember">
              Remember Me
            </label>
          </div>
          <div className={classes.forgotPlace}>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
        <div className={classes.loginRow}>
          <button type="submit">Login</button>
        </div>
      </form>
      <p className="textCenter">Don't have an account? <a href="">Register now!</a></p>
    </div>
    </TemplateFull>
  );
};
export default Login;
