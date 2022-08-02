import ChooseBox from "../ChooseBox/ChooseBox";
import style from "./Footer.module.scss";
import CTAButton from "../Button/CTAButton";

const Footer = () => {
  const locaitonText ="Choose a location";
  const info = "London, Great Britain"
  return (
    <div className={style.footer}>
      <ChooseBox locationText={locaitonText} info={info}/>
      <ChooseBox locationText={locaitonText} info={info}/>
      <ChooseBox locationText={locaitonText} info={info}/>
      <CTAButton text="Search"/>
      
    </div>
  );
};

export default Footer;
