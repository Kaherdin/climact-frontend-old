import styles from "@/styles/components/Home/ToolSection/ToolTab.module.css";

export default function ToolTab({ activeIndex, changeActiveIndex }) {
  return (
    <div className={styles.tools_tabs_wrap}>
      <ul className={styles.tools_tabs}>
        <li
          className={activeIndex == 0 ? styles.current : ""}
          onClick={() => {
            changeActiveIndex(0);
          }}
        >
          <p className={styles.tools_tab_name}>Weather</p>
          <p className={styles.tools_tab_period}>up to 2 weeks</p>
        </li>
        <li
          className={activeIndex == 1 ? styles.current : ""}
          onClick={() => {
            changeActiveIndex(1);
          }}
        >
          <p className={styles.tools_tab_name}>Seasonal Climate Insights</p>
          <p className={styles.tools_tab_period}>up to 1 year out</p>
        </li>
        <li
          className={activeIndex == 2 ? styles.current : ""}
          onClick={() => {
            changeActiveIndex(2);
          }}
        >
          <p className={styles.tools_tab_name}>Long Term Forecast</p>
          <p className={styles.tools_tab_period}>10 - 50 years out</p>
        </li>
      </ul>
    </div>
  );
}
