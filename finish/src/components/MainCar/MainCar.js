import SliderCar from "../../assets/img/5.png";
import Button from "../Button/CTAButton";
import style from "./MainCar.module.scss";
const MainCar = () => {
  return (
    <div className={style.slider}>
      <Button className="yellow" text="More Details"></Button>
      <img className={style.slider__img} src={SliderCar} alt="Rent A Car"></img>
    </div>
  );
};

export default MainCar;
