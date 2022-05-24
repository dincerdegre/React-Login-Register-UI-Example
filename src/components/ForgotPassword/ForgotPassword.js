import { Outlet, Link } from "react-router-dom";
import classes from "./ForgotPassword.module.css";
import "../TemplateFull/FormBox.css";
import logo from "../../assets/images/logo.png";
import TemplateFull from "../TemplateFull/TemplateFull";
const ForgotPassword = () => {
  return (
    <TemplateFull>
      <div className="formBox">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h3>Reset Password</h3>
        <p>Enter your email address associated with your Account</p>
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
            <button type="submit">Continue</button>
          </div>
          <p className="textCenter">
            Return to <Link to="/login">Login</Link> Screen
          </p>
        </form>
      </div>
    </TemplateFull>
  );
};
export default ForgotPassword;
