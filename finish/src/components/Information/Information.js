import PriceCard from "../PriceCard/PriceCard"
import Slider from "../Slider/Slider"
import InformationCar from "./InformationCar"
import style from "./Information.module.scss";

const Information = () => {
  return (
    <div className={style.information}>
        <PriceCard daily={" 880 ₺"} weekly={"  5900 ₺"} />
        <InformationCar name={"Rent The Best Cars"}/>
        <Slider/>
    </div>
  )
}

export default Information