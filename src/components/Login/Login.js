import {Link} from 'react-router-dom';
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
      <form className={classes.formBody}>
        <div className={classes.formRow}>
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
        <div className={classes.formRow}>
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
        <div className={`${classes.formRow} ${classes.rowDisplay}`}>
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
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
        <div className={classes.formRow}>
          <button type="submit">Login</button>
        </div>
      </form>
      <p className="textCenter">Don't have an account? <Link to="/register">Register now!</Link></p>
    </div>
    </TemplateFull>
  );
};
export default Login;
