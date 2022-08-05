import PriceCard from "../PriceCard/PriceCard";
import InformationCar from "./InformationCar";
import style from "./Information.module.scss";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";


const Information = () => {
  const { data, getData } = useHttp();

  useEffect(() => {
    getData(
      "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    );
  }, []);

 
  return (
    <div className={style.information}>
      {data.map(car => <PriceCard key={car.id} daily={car.daily} weekly={car.weekly}/>)}
      {data.map(car => <InformationCar key={car.id} name={car.brand}/>)}
    </div>
  );
};

export default Information;
