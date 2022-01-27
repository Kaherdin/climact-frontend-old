import ImageSlider from "./ImageSlider";
import TextSlider from "./TextSlider";
import styles from "@/styles/components/Home/Intro/Intro.module.css";
import { useState } from "react";

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.intro_slider}>
            <div className={styles.intro_slider_left}>
              <div className={styles.intro_slider_images}>
                <ImageSlider
                  changeActiveIndex={changeActiveIndex}
                  activeIndex={activeIndex}
                />
              </div>
            </div>
            <div className={styles.intro_slider_right}>
              <div className="intro_slider_text">
                <TextSlider
                  changeActiveIndex={changeActiveIndex}
                  activeIndex={activeIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
