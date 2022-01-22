import styles from "@/styles/components/Home/Podcast/Podcast.module.css";

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
              {/* <img
                className={styles.podcast_img}
                src="https://i0.wp.com/climate.ai/wp-content/uploads/2020/02/podcast_img.jpg?fit=720%2C720&ssl=1"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
