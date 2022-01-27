import styles from "@/styles/components/Home/ToolSection/Tabs/TabWeather/WeatherForecast.module.css";
import Slider from "react-slick";
import Image from "next/image";

export default function WeatherForecast() {
  const settingsImageSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    className: styles.weather_illustration,
  };

  return (
    <div className={styles.weather_wrap}>
      <div className={styles.weather_inner}>
        <Slider {...settingsImageSlider}>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_9.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_8.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_7.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_6.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_5.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_4.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_3.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_2.svg"
              width={87}
              height={213}
            />
          </div>
          <div className={styles.weather_item}>
            <Image
              alt=""
              src="https://climate.ai/wp-content/uploads/2020/03/weather_1.svg"
              width={87}
              height={213}
            />
          </div>
        </Slider>
        <div className={styles.weather_box}>
          <p>
            We take in data from the best forecasts and weight them to give you
            the best crop specific, farm specific, forecast for the agronomic
            insights you&nbsp;care about most
          </p>
        </div>
      </div>
      <div className={styles.weather_bottom}>
        <p className={styles.weather_bottom_title}>
          Don’t have an onsite weather station?
        </p>
        <div className={styles.weather_bottom_text}>
          <p>
            We can get you a farm specific forecast at a fraction of the price
            with our physical-virtual weather station hybrid, powered by
            artificial intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
