import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import CTAButton from "../Button/CTAButton";

import style from "./Header.module.scss";
import LogoIcon from "../../Icon/LogoIcon/LogoIcon";
const Header = () => {
  return (
    <div className={style.header}>
      <LogoIcon/>
      <HeaderNavigation />
      <CTAButton className="white" text={"Contact Us"} />
    </div>
  );
};

export default Header;
