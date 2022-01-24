import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Home/Intro/Intro.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick, customClass } = props;
  return (
    <div
      className={`${className} ${customClass}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, customClass } = props;
  return (
    <div
      className={`${className} ${customClass}`}
    />
  );
}

export default function TextSlider(props) {
  const { changeActiveIndex } = props;

  const changeIndex = (index) => {
    changeActiveIndex(index);
  };

  const settingsTextSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    nextArrow: (
      <SampleNextArrow customClass={`${styles.slick_arrow} ${styles.next}`} />
    ),
    prevArrow: <SamplePrevArrow customClass={`${styles.slick_arrow}`} />,
  };

  return (
    <Slider {...settingsTextSlider}>
      <div className={styles.intro_item_info}>
        <div className={styles.intro_item_text}>
          <p>
            “Climate change over the mid – long term is adversely affecting
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

      <div className={styles.intro_item_info}>
        <div className={styles.intro_item_text}>
          <p>
            “Climate change over the mid – long term is adversely affecting
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
