import style from "./CTAButton.module.scss";
const CTAButton = (props) => {
  // const clickAction = () => {
  //   props.onClickAction();
  // }

  // const closeAction = () => {
  //   props.onBlurAction();
  // }
  return (
    <div>
        <button className={style.button}  >{props.text}</button>
    </div>
  )
}

export default CTAButton;