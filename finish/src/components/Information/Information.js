import PriceCard from "../PriceCard/PriceCard";
import InformationCar from "./InformationCar";
import style from "./Information.module.scss";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import MainCar from "../MainCar/MainCar";

const Information = () => {
  const { data, getData } = useHttp();
   useEffect(() => {
    getData(
      "https://carv3-2fb3e-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    );
    
  }, []);

  const [filteredPrice, setFilteredPrice] = useState("");
  const [filteredBrand, setFilteredBrand] = useState("");


  const sliderAction = (realIndex) => {
    
    setFilteredPrice(data.map((car) =>car.id === realIndex ? (
      <PriceCard key={car.id} daily={car.daily} weekly={car.weekly} />
    ) : "" ));

    setFilteredBrand(data.map((car) => car.id === realIndex ? (
      <InformationCar key={car.id} name={car.brand} />
    ): ""));

  };


  return (
    <div>
      <div className={style.information}>
        <div className={style.information__price}>{filteredPrice}</div>
        <div className={style.information__brand}>{filteredBrand}</div>
      </div>
      <div className={style.information__carImage}>
        <MainCar data={data} onSliderAction={sliderAction} />
      </div>
    </div>
  );
};

export default Information;
