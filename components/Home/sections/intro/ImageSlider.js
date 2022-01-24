import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@/styles/components/Home/Intro/Intro.module.css";
import testimonial_img from "../../../../public/assets/images/Home/testimonial_img.jpeg";
import tspl from "../../../../public/assets/images/Home/tspl@2x-2.png";
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
        <Image src={tspl} alt="" srcSet="" width={480} height={640} />
      </div>
      <div className={styles.intro_item_img}>
        {/* <Image src="" width="100%" height="100%" layout="responsive" objectFit="contain" /> */}
        <Image
          src={testimonial_img}
          alt=""
          srcSet=""
          width={480}
          height={640}
        />
      </div>
    </Slider>
  );
}
