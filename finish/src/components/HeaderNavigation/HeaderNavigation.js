import { NavLink } from "react-router-dom";
import style from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => {

const isActiveMenu = (data) =>{
    return data.isActive ? "-active" : ""
}
  return (
    <nav className={style.navigation}>
      <NavLink className={isActiveMenu} to="Home">Home</NavLink>
      <NavLink to="/cars">Cars</NavLink>
      <NavLink to="/ourServices">OurServices</NavLink>
    </nav>
  );
};

export default HeaderNavigation;
