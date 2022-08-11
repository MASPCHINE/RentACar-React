import ChooseBox from "../ChooseBox/ChooseBox";
import style from "./Footer.module.scss";
import CTAButton from "../Button/CTAButton";
import SearchIcon from "../../Icon/SearchIcon/SearchIcon"
import AutoComplete from "../AutoComplete/AutoComplete";
import { useState } from "react";

const Footer = () => {
  const locaitonText ="Choose a location";
 

  const returnDate = "Return date"

  const [pickUpDate,setPickUpDate] = useState("Pick-up date")

  return (
    <div className={style.footer}>
      <div className={style.footer__card}>
        <AutoComplete locationText={locaitonText}/>
        <ChooseBox pickUpDate={pickUpDate} />
        <ChooseBox returnDate={returnDate}/>
        <CTAButton className="yellow" text="Search"><SearchIcon/></CTAButton>
      </div>
    </div>
  );
};

export default Footer;
