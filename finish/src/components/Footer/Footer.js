import ChooseBox from "../ChooseBox/ChooseBox";
import style from "./Footer.module.scss";
import CTAButton from "../Button/CTAButton";
import SearchIcon from "../../Icon/SearchIcon/SearchIcon"

const Footer = () => {
  const locaitonText ="Choose a location";
  const info = "London, Great Britain"

  return (
    <div className={style.footer}>
      <ChooseBox locationText={locaitonText} info={info}/>
      <ChooseBox locationText={locaitonText} info={info}/>
      <ChooseBox locationText={locaitonText} info={info}/>
      <CTAButton className="yellow" text="Search"><SearchIcon></SearchIcon></CTAButton>
      
    </div>
  );
};

export default Footer;
