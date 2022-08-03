import "./CTAButton.css";

const CTAButton = (props) => {
  const classes = "button " + props.className;
  return (
    <div>
      <button className={classes}>{props.children} {props.text}</button>
    </div>
  );
};

export default CTAButton;
