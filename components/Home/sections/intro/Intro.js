import ImageSlider from "./ImageSlider";
import TextSlider from "./TextSlider";
import styles from "@/styles/components/Home/Intro/Intro.module.css";

export default function Intro() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.intro_slider}>
            <div className={styles.intro_slider_left}>
              <div className={styles.intro_slider_images}>
                <ImageSlider />
              </div>
            </div>
            <div className={styles.intro_slider_right}>
              <div className="intro_slider_text">
                <TextSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
