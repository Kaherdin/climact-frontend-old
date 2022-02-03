import styles from "@/styles/components/Home/ToolSection/TimelineSection/TimelineSection.module.css";
import PeriodComponent from "./PeriodComponent";
const PERIOD_DATA = [
  { id: 1, name: "" },
  { id: 2, name: "1 week" },
  { id: 3, name: "2 weeks" },
  { id: 4, name: "6 months" },
  { id: 5, name: "1 year" },
  { id: 6, name: "50 years" },
];
export default function TimelineSection({ activeIndex }) {
  return (
    <div className={styles.tools_timeline_section}>
      <div
        className={`${styles.tools_timeline} ${
          activeIndex == 1
            ? styles.step_2
            : activeIndex == 2
            ? `${styles.step_2} ${styles.step_3}`
            : ""
        }`}
      >
        <div className={styles.tools_timeline_wrap}>
          {PERIOD_DATA.map((item) => {
            return (
              <PeriodComponent
                key={item.id}
                name={item.name}
                id={item.id}
              ></PeriodComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
}
