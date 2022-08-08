import PriceCard from "../PriceCard/PriceCard";
import InformationCar from "./InformationCar";
import style from "./Information.module.scss";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import MainCar from "../MainCar/MainCar";

const Information = () => {
  const { data, getData } = useHttp();
  useEffect(() => {
    getData(
      "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    );
  }, []);


  const sliderAction = () => {
    console.log("2.aşama denemesi");
  };

  return (
    <div>
      <div className={style.information}>
        <div className={style.information__upper}>
          {data.map((car) => (
            <PriceCard key={car.id} daily={car.daily} weekly={car.weekly} />
          ))}
        </div>
        <div className={style.information__upper}>
          {data.map((car) => (
            <InformationCar key={car.id} name={car.brand} />
          ))}
        </div>
      </div>
      <div className={style.information__carImage}>
        <MainCar data={data} onSliderAction={sliderAction} />
      </div>
    </div>
  );
};

export default Information;
