import styles from "@/styles/components/Home/Podcast/Podcast.module.css";
import Image from "next/image";
import podcastImage from "../../../../public/assets/images/Home/podcast_img.jpeg";
export default function PodCast() {
  return (
    <section className={styles.podcast_section}>
      <div className={styles.podcast_inner}>
        <div className={styles.podcast_container}>
          <div className={styles.podcast_wrap}>
            <div className={styles.podcast_info}>
              <div className={styles.podcast_info_title}>
                <h2 className={styles.podcast_info_title}>
                  Listen to our podcast
                </h2>
                <p className={styles.podcast_info_text}>
                  We sit down industry leading executives, farmers, and thought
                  leaders to get a 360 view of how the agriculture sector is
                  innovating to stay ahead of a changing climate.
                </p>
                <a href="#" className={styles.btn_listen}>
                  Listen now
                </a>
              </div>
            </div>
            <div className={styles.podcast_img_wrapper}>
              <div className={styles.podcast_img}>
                <Image
                  src={podcastImage.src}
                  alt="fdsaf"
                  width={360}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
