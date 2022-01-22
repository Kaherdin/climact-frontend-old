import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@/styles/components/Home/Intro/Intro.module.css";

export default function ImageSlider() {
  const settingsImageSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <Slider {...settingsImageSlider}>
      <div className={styles.intro_item_img}>
        {/* <Image src="" width="100%" height="100%" layout="responsive" objectFit="contain" /> */}
        <img
          src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/03/tspl@2x-2.png?resize=480%2C640&ssl=1"
          alt=""
          srcSet=""
        />
      </div>
      <div className={styles.intro_item_img}>
        {/* <Image src="" width="100%" height="100%" layout="responsive" objectFit="contain" /> */}
        <img
          src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/02/testimonial_img.jpg?resize=480%2C640&ssl=1"
          alt=""
          srcSet=""
        />
      </div>
    </Slider>
  );
}
