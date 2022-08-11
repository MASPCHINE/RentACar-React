import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import CTAButton from "../Button/CTAButton";

import style from "./Header.module.scss";
import LogoIcon from "../../Icon/LogoIcon/LogoIcon";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.header}>
      <LogoIcon />
      <HeaderNavigation />
      <div className={style.header__button}>
        <NavLink className={style.header__link} to="/login" >
          <CTAButton className="green" text={"Login"} />
        </NavLink>
        <CTAButton className="white" text={"Contact Us"} />
      </div>
    </div>
  );
};

export default Header;
