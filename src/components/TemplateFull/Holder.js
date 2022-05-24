import classes from './Holder.module.css';
const Holder = (props) => {
    return (<div className={classes.place}>
        {props.children}
    </div>);
}

export default Holder;