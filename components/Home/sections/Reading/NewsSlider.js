import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsItem from "./NewsItem";
import styles from "@/styles/components/Home/Reading/NewsSlider.module.css";

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
      onClick={onClick}
    />
  );
}

export default function NewsSlider() {
  useEffect(() => {
    const slide = document.getElementsByClassName("slick-list")[0];
    console.log(slide);
    if (slide) {
      slide.style.setProperty("padding", "0px 15%");
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "64px",
          position: "relative",
        }}
      >
        <ul className={styles.listLine}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className={styles.line}></div>,
    nextArrow: (
      <SampleNextArrow customClass={`${styles.slick_arrow} ${styles.next}`} />
    ),
    prevArrow: (
      <SamplePrevArrow customClass={`${styles.slick_arrow} ${styles.prev}`} />
    ),
    draggable: true,
  };

  return (
    <Slider {...settings}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Slider>
  );
}
