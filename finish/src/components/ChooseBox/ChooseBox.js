import { useState } from "react";
import DropDownIcon from "../../Icon/DropDownIcon/DropDownIcon";
import LocationIcon from "../../Icon/LocationIcon/LocationIcon";
import Calendar from "react-calendar";
import style from "./ChooseBox.module.scss";
import 'react-calendar/dist/Calendar.css';

const ChooseBox = (props) => {
  
  const [calendar, setCalendar] = useState(false);
  const [info,setInfo] = useState("Dec 08, 10:00 PM")


  const openCalendar = () => {
      setCalendar(!calendar);
  };
  
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  const changeHandler = (event) =>{
   setInfo(event.toLocaleDateString('eng', options))

  }

  return (
    <div>
      <div className={style.chooseBox}>
        <LocationIcon />
        <div className={style.chooseBox__info}>
          {props.pickUpDate ? (
            <span className={style.option}>{props.pickUpDate}</span>
          ) : (
            <span className={style.option}>{props.returnDate}</span>
          )}

          <span>{info} 10:00 PM </span>
        </div>
        <DropDownIcon onClickAction={openCalendar} />
      </div>
      {calendar && <Calendar  minDate={new Date()}  onClickDay={changeHandler}/>}
    </div>
  );
};

export default ChooseBox;
