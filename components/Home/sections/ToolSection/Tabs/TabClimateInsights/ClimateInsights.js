import styles from "@/styles/components/Home/ToolSection/Tabs/TabClimateInsights/ClimateInsights.module.css";
import Image from "next/image";

export default function ClimateInsights() {
  return (
    <div className={styles.climate_insights}>
      <div className={styles.climate_insights_img}>
        <video muted autoPlay playsInline loop>
          <source
            src="https://climate.ai/wp-content/uploads/2020/04/map_clouds.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.climate_insights_right}>
        <div className={styles.climate_insights_triggers}>
          <div className={styles.climate_insight_box}>
            <div className={styles.climate_insight_icon}>
              <Image
                alt=""
                width={36}
                height={36}
                src="https://climate.ai/wp-content/uploads/2020/03/climate_icon_1.svg"
              />
            </div>
            <div className={styles.climate_insight_info}>
              <p className={styles.climate_insight_name}>
                Forecasts need to be crop specific
              </p>
              <p className={styles.climate_insight_text}>
                Ours forecasts vary farm to farm depending on the needs of the
                grower
              </p>
            </div>
          </div>
          <div className={styles.climate_insight_box}>
            <div className={styles.climate_insight_icon}>
              <Image
                alt=""
                width={36}
                height={36}
                src="https://climate.ai/wp-content/uploads/2020/03/climate_icon_2.svg"
              />
            </div>
            <div className={styles.climate_insight_info}>
              <p className={styles.climate_insight_name}>
                You have data sitting unused — we can help put it to work
              </p>
              <p className={styles.climate_insight_text}>
                The more data, the more opportunity to address complex, nuanced
                issues
              </p>
            </div>
          </div>
          <div className={styles.climate_insight_box}>
            <div className={styles.climate_insight_icon}>
              <Image
                alt=""
                width={36}
                height={36}
                src="https://climate.ai/wp-content/uploads/2020/03/climate_icon_3.svg"
              />
            </div>
            <div className={styles.climate_insight_info}>
              <p className={styles.climate_insight_name}>
                Forecasts and imagery working together
              </p>
              <p className={styles.climate_insight_text}>
                We combine imagery with weather to track your crop in real time
              </p>
            </div>
          </div>
          <div className={styles.climate_insight_box}>
            <div className={styles.climate_insight_icon}>
              <Image
                alt=""
                width={36}
                height={36}
                src="https://climate.ai/wp-content/uploads/2020/03/climate_icon_4.svg"
              />
            </div>
            <div className={styles.climate_insight_info}>
              <p className={styles.climate_insight_name}>
                Seasonal forecasts aren&apos;t accurate enough
              </p>
              <p className={styles.climate_insight_text}>
                That&apos;s why we made our own seasonal forecast that predicts
                1 month to 1 year out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
