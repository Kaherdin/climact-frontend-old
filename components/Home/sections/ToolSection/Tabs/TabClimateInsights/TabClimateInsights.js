import styles from "@/styles/components/Home/ToolSection/Tabs/TabWeather/TabWeather.module.css";
import ClimateInsights from "./ClimateInsights";

export default function TabClimateInsights() {
  return (
    <div>
      <div className={styles.tool_container_description}>
        <h3 className={styles.tool_container_title}>
          Get ahead of supply chain disruptions with forecasts <br /> and alerts
          specific to your crops/commodities and sourcing needs
        </h3>
        <p className={styles.tool_container_text}>
          More accuracy, transparency, and usability than ever before
        </p>
      </div>
      <ClimateInsights></ClimateInsights>
    </div>
  );
}
