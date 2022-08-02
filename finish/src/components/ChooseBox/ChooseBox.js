import { useState } from "react";
import DropDownIcon from "../../Icon/DropDownIcon/DropDownIcon"
import LocationIcon from "../../Icon/LocationIcon/LocationIcon"
import Calendar from "react-calendar";
import style from "./ChooseBox.module.scss";

const ChooseBox = (props) => {
    const [calendar, setCalendar] = useState(false);

    const openCalendar = () => {
      setCalendar(true);
    };
    
    const closeCalendar = () => {
      setCalendar(false);
    };
  return (
    <div className={style.chooseBox}>
        <LocationIcon/>
        <div className={style.chooseBox__info}>
            <span className={style.option}>{props.locationText}</span>
            <span>{props.info}</span>
        </div>
        <DropDownIcon onClickAction={openCalendar} onBlurAction={closeCalendar} />
        {calendar && <Calendar className={style.chooseBox__calendar}  />}
    </div>
  )
}

export default ChooseBox