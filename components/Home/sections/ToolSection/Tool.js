import styles from "@/styles/components/Home/ToolSection/Tool.module.css";
import homeStyles from "@/styles/components/Home/Home.module.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import TabWeather from "./Tabs/TabWeather/TabWeather";
import TimelineSection from "./TimelineSection/TimelineSection";
import TabClimateInsights from "./Tabs/TabClimateInsights/TabClimateInsights";
import TabLongTermForecast from "./Tabs/TabLongTermForecast/TabLongTermForecast";
function SampleNextArrow(props) {
  const { className, onClick, customClass } = props;
  return <div className={`${className} ${customClass}`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick, customClass } = props;
  return <div className={`${className} ${customClass}`} onClick={onClick} />;
}
export default function Tool({ activeIndex, changeActiveIndex }) {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    autoplay: false,

    nextArrow: (
      <SampleNextArrow customClass={`${styles.slick_arrow} ${styles.next}`} />
    ),
    prevArrow: (
      <SamplePrevArrow customClass={`${styles.slick_arrow} ${styles.prev}`} />
    ),
    beforeChange: (currentIndex, activeIndex) => {
      changeIndex(activeIndex);
    },
  };

  return (
    <div className={styles.container_fluid}>
      <div className={styles.tools_container}>
        <div className={homeStyles.container}>
          <div className={homeStyles.tools_content_wrap}>
            <Slider
              ref={(slider) => setSlider(slider)}
              {...settingsImageSlider}
            >
              <TabWeather></TabWeather>
              <TabClimateInsights></TabClimateInsights>
              <TabLongTermForecast></TabLongTermForecast>
            </Slider>
            <TimelineSection activeIndex={activeIndex}></TimelineSection>
          </div>
        </div>
      </div>
    </div>
  );
}
