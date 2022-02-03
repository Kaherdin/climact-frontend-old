import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/components/Home/Intro/Intro.module.css";

export default function ImageSlider(props) {
  const { activeIndex, changeActiveIndex } = props;
  const [slider, setSlider] = useState(null);

  const changeIndex = (index) => {
    changeActiveIndex(index);
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(activeIndex);
    }
  }, [activeIndex, slider]);

  const settingsImageSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    beforeChange: (currentIndex, activeIndex) => {
      changeIndex(activeIndex);
    },
  };

  return (
    <Slider ref={(slider) => setSlider(slider)} {...settingsImageSlider}>
      <div className={styles.intro_item_img}>
        <Image
          src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/03/tspl@2x-2.png?resize=480%2C640&ssl=1"
          layout="fill"
          alt="Intro image"
        />
      </div>
      <div className={styles.intro_item_img}>
        <Image
          src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/02/testimonial_img.jpg?resize=480%2C640&ssl=1"
          layout="fill"
          alt="Intro image"
        />
      </div>
      <div className={styles.intro_item_img}>
        <Image
          src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/03/Ashby-Head.jpg?resize=480%2C640&ssl=1"
          layout="fill"
          alt="Intro image"
        />
      </div>
    </Slider>
  );
}
