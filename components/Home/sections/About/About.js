import styles from "@/styles/components/Home/About/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about_wrapper}>
        <div className="container">
          <div className={styles.description_block}>
            <h2 className={styles.title_block}>
              Turn climate volatility into a competitive advantage
            </h2>
            <p className={styles.text_block}>
              The same technology that powers autonomous driving and successful
              rocket launches enables ClimateAi to help you stay ahead of supply
              disruptions. The technology is patented, published, award winning,
              and always improving.
            </p>
          </div>
          <div className="about_video_wrap">
            <div className={styles.about_media}>
              <video muted autoPlay loop>
                <source
                  src="https://climate.ai/wp-content/uploads/2020/03/nino-index-visual.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
