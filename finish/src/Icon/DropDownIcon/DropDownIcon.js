import style from "./DropDownIcon.module.scss";
const DropDownIcon = (props) => {

  const openMenu = () => {
    props.onClickAction();
  };

  const openClose = () => {
    props.onCloseAction();
  }

  return (
    <div>
      <svg onClick={openMenu}  className={style.dropDownIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  );
};

export default DropDownIcon;
