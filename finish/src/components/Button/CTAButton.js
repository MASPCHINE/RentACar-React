import style from "./CTAButton.module.scss";
const CTAButton = (props) => {
  return (
    <div>
        <button className={style.button}>{props.text}</button>
    </div>
  )
}

export default CTAButton;