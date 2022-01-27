import styles from "@/styles/components/Home/ToolSection/Tabs/TabWeather/TabWeather.module.css";
import Forecast from "./Forecast";
export default function TabWeather() {
  return (
    <div>
      <div className={styles.tool_container_description}>
        <h3 className={styles.tool_container_title}>
          Get ahead of supply chain disruptions with forecasts <br /> and alerts
          specific to your crops/commodities and sourcing needs
        </h3>
        <p className={styles.tool_container_text}>
          Ensuring long term profitability means staying ahead of the curve
        </p>
      </div>
      <Forecast></Forecast>
    </div>
  );
}
