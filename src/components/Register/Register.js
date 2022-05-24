import classes from "./Register.module.css";
import "../TemplateFull/FormBox.css"
import logo from "../../assets/images/logo.png";
import TemplateFull from "../TemplateFull/TemplateFull";
const Register = () => {
  return (
      <TemplateFull>
    <div className="formBox">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h3>Register</h3>
      <p>Create a New Account</p>
      <form className={classes.loginForm}>
      <div className={classes.loginRow}>
          <label htmlFor="userName" className={classes.rowLabel}>
            Username
          </label>
          <input
            type="text"
            id="userName"
            required
            placeholder="Enter Your Username"
          />
        </div>
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
          <span>Minimum length of 8 character.</span>
        </div>
        <div className={classes.loginRow}>
          <label htmlFor="rePassword" className={classes.rowLabel}>
            Confirm Password
          </label>
          <input
            type="password"
            id="rePassword"
            required
            placeholder="Enter Your Password"
          />
        </div>
        <div className={classes.loginRow}>
          <button type="submit">Register</button>
        </div>
      </form>
      <p className="textCenter">Already have an account?  <a href="">Login</a></p>
    </div>
    </TemplateFull>
  );
};
export default Register;
