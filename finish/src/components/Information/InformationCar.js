import style from "./InformationCar.module.scss";

const InformationCar = (props) => {
  return (
    <div className={style.carName}>
      <div>{props.name}</div>
    </div>
  );
};

export default InformationCar;
