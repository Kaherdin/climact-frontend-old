import styles from "@/styles/components/Home/ToolSection/ToolSection.module.css";
import ToolTab from "./ToolTab";
import Tool from "./Tool";
import { useState } from "react";

export default function ToolSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className={styles.tools_section}>
      <div className={styles.container}>
        <div className={styles.description_block}>
          <h2 className="title_block">
            The world&apos;s first Enterprise Climate Planning platform with
            market leadership in agriculture.
          </h2>
          <p className="text_block">
            We help food and agriculture businesses build supply chain
            resilience, improve profitability, and sustainably intensify
            production with customer-specific supply chain insights from 1 day -
            50 years out.
          </p>
        </div>
        <ToolTab
          changeActiveIndex={changeActiveIndex}
          activeIndex={activeIndex}
        ></ToolTab>
      </div>
      <Tool
        changeActiveIndex={changeActiveIndex}
        activeIndex={activeIndex}
      ></Tool>
    </section>
  );
}
