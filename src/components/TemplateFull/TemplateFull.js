import Holder from '../UI/Holder';
import classes from './TemplateFull.module.css';
import Info from "./Info";


const TemplateFull = (props) => {
  return (
    <div className={`${classes.container}`}>
      <Info />
      <Holder>
        {props.children}
      </Holder>
    </div>
  );
};

export default TemplateFull;