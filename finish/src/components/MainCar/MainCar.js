import Button from "../Button/CTAButton";
import style from "./MainCar.module.scss";
import useHttp from "../../hooks/use-http";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import { useEffect } from "react";

const MainCar = () => {
  const { data, getData } = useHttp();

  const photos = data.map((photo) => (
    <SwiperSlide>
      <img src={photo.svg} className={style.slider__img} />
    </SwiperSlide>
  ));

  useEffect(() => {
    getData(
      "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    );
  }, []);

  return (
    <div className={style.slider}>
      <Button className="yellow" text="More Details"></Button>

      <Swiper
        direction={"horizontal"}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {photos}
      </Swiper>
    </div>
  );
};

export default MainCar;
