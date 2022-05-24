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
          <button type="submit">Continue</button>
        </div>
        <p className="textCenter">Return to <a href="/login">Login</a> Screen</p>
      </form>
    </div>
    </TemplateFull>
  );
};
export default ForgotPassword;
