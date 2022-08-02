//import style from "./CTAButton.module.scss";
import "./CTAButton.css";

const CTAButton = (props) => {
  const classes = "button " + props.className
  return (
    <div>
        <button className={classes}>{props.text}</button>
    </div>
  )
}

export default CTAButton;