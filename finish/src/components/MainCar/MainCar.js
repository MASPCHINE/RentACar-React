import Button from "../Button/CTAButton";
import style from "./MainCar.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const MainCar = (props) => {
  const onSliderAction = props.onSliderAction;

  const photos =
    props.data &&
    props.data.map((photo) => (
      <SwiperSlide>
        <img
          key={photo.id}
          src={photo.svg}
          className={style.slider__img}
          alt={photo.brand}
        />
      </SwiperSlide>
    ));

  const onChanged = (e) => {
    onSliderAction(e.realIndex);
  };

  const slider = (
    <Swiper
      direction={"horizontal"}
      onSlideChange={onChanged}
      pagination={{
        clickable: true,
      }}
      //onTransitionEnd={transitionEndHandler}
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
