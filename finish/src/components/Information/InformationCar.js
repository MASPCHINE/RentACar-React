import style from "./InformationCar.module.scss";

import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
const InformationCar = (props) => {

  const { data, getData } = useHttp();

  useEffect(() => {
    getData(
      "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    );
  }, []);

  
  return (
    <div className={style.carName}>
      <div>{props.name}</div>
    </div>
  );
};

export default InformationCar;
