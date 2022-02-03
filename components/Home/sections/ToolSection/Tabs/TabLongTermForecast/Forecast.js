import AfricaImage from "@/components/Shared/Icon/AfricaImage";
import styles from "@/styles/components/Home/ToolSection/Tabs/TabLongTermForecast/TabLongTermForecast.module.css";

export default function Forecast() {
  return (
    <div className={styles.forecast_wrap}>
      <div className={styles.forecast_img}>
        <AfricaImage />
      </div>
      <div className={styles.forecast_info}>
        <h3 className={styles.forecast_info_title}>
          What kinds of questions can our long term forecast help address?
        </h3>
        <div className={styles.forecast_info_text}>
          <p>“How will climate change effect my yields over time?”</p>
          <p>
            “How will my weather patterns change on my land in 10, 20, 30 years”
          </p>
          <p>“Will climate change effect the quality of my crops as well?”</p>
          <p>
            “I want to be proactive, what are my options to maintain/grow my
            profits as an ag-business?”
          </p>
        </div>
      </div>
    </div>
  );
}
