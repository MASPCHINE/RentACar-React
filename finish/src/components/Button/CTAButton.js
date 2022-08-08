import style from "./CTAButton.module.scss";

const CTAButton = (props) => {
  const classes = style.button +" " + style[props.className];
  return (
    <div>
      <button className={classes}>{props.children} {props.text}</button>
    </div>
  );
};

export default CTAButton;
