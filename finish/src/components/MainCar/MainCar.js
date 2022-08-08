import Button from "../Button/CTAButton";
import style from "./MainCar.module.scss";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const MainCar = (props) => {
  const onSliderAction = props.onSliderAction;
  //console.log("props",props);
  // useEffect(() => {
  //   getData(
  //     "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
  //   );
   
  // }, []);

  const photos = props.data && props.data.map((photo) => (
    <SwiperSlide>
      <img src={photo.svg} className={style.slider__img} />
    </SwiperSlide>
  ));

  const onChanged = (props) => {
    console.log("1.aşama",onSliderAction);

    onSliderAction();
    
  }

  const slider = (
    <Swiper
      direction={"horizontal"}
      onSlideChange={onChanged}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={style.mySwiper}
    >
      {photos}
    </Swiper>
  );

  return (
    <div className={style.slider}>
      <Button className="yellow" text="More Details"></Button>
      {slider}
    </div>
  );
};

export default MainCar;
