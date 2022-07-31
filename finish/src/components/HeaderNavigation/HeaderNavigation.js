import { NavLink } from "react-router-dom";
import style from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => {

const isActiveMenu = (data) =>{
    return data.isActive ? "-active" : ""
}
  return (
    <nav className={style.navigation}>
      <NavLink className={isActiveMenu}to="Home">Home</NavLink>
      <NavLink to="Cars">Cars</NavLink>
      <NavLink to="OurServices">OurServices</NavLink>
    </nav>
  );
};

export default HeaderNavigation;
