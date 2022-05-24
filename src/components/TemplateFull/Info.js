import backgroundImage from '../../assets/images/diego-gennaro-RSvJQ-IP_pk-unsplash.jpg';
import classes from './Info.module.css';
const Info = (props) => {
  return <div className={classes.bgInfo} style={ {backgroundImage: `url(${backgroundImage})`}}><div className={classes.blueRay}></div></div>;
};

export default Info;
