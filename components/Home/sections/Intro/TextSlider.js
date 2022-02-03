import { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "@/styles/components/Home/Intro/Intro.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick, customClass } = props;

  return <div className={`${className} ${customClass}`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick, customClass } = props;
  return <div className={`${className} ${customClass}`} onClick={onClick} />;
}

export default function TextSlider(props) {
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

  const settingsTextSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    nextArrow: (
      <SampleNextArrow customClass={`${styles.slick_arrow} ${styles.next}`} />
    ),
    prevArrow: <SamplePrevArrow customClass={`${styles.slick_arrow}`} />,
    beforeChange: (currentIndex, activeIndex) => {
      changeIndex(activeIndex);
    },
    fade: true,
  };

  return (
    <Slider ref={(slider) => setSlider(slider)} {...settingsTextSlider}>
      <div className={styles.intro_item_info}>
        <div className={styles.intro_item_text}>
          <p>
            “1. Climate change over the mid – ClimateAI is pioneering the use of
            artificial intelligence to better predict these climatic patterns
            and thus help businesses better manage investments, capital outlay
            and operating expenditure”
          </p>
        </div>
        <div className={styles.intro_item_bottom}>
          <p className={styles.intro_item_name}>Kittu Kolluri</p>
          <p className={styles.intro_item_position}>
            Founder & managing director at Neotribe Ventures and former investor
            in Climate Corp
          </p>
        </div>
      </div>

      <div className={styles.intro_item_info}>
        <div className={styles.intro_item_text}>
          <p>
            “2. Climate change over the mid – long term is adversely affecting
            businesses in the agriculture, energy, and insurance sectors to name
            a few. climatic patterns and thus help businesses better manage
            investments, capital outlay and operating expenditure”
          </p>
        </div>
        <div className={styles.intro_item_bottom}>
          <p className={styles.intro_item_name}>Kittu Kolluri</p>
          <p className={styles.intro_item_position}>
            Founder & managing director at Neotribe Ventures and former investor
            in Climate Corp
          </p>
        </div>
      </div>

      <div className={styles.intro_item_info}>
        <div className={styles.intro_item_text}>
          <p>
            “3. Climate change over the mid – long term is adversely affecting
            businesses in the agriculture, energy, and insurance sectors to name
            a few. ClimateAI is pioneering the use of artificial intelligence to
            better predict these climatic patterns and thus help businesses
            better manage investments, capital outlay and operating expenditure”
          </p>
        </div>
        <div className={styles.intro_item_bottom}>
          <p className={styles.intro_item_name}>Kittu Kolluri</p>
          <p className={styles.intro_item_position}>
            Founder & managing director at Neotribe Ventures and former investor
            in Climate Corp
          </p>
        </div>
      </div>
    </Slider>
  );
}
