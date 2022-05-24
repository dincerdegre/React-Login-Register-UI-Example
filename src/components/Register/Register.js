import {Link} from 'react-router-dom';
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
      <form className={classes.formBody}>
      <div className={classes.formRow}>
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
          <span>Minimum length of 8 character.</span>
        </div>
        <div className={classes.formRow}>
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
        <div className={classes.formRow}>
          <button type="submit">Register</button>
        </div>
      </form>
      <p className="textCenter">Already have an account?  <Link to="/login">Login</Link></p>
    </div>
    </TemplateFull>
  );
};
export default Register;
