import styles from "@/styles/components/Home/TopSection/TopMark.module.css";
import TopMarkIcon from "components/Shared/Icon/TopMark";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
export default function TopMarK({ topMark }) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // Required
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: require("../../../../public/assets/animation/pulsation.json"), // Name fo
    });
  }, []);

  return (
    <>
      <div className={styles[`top_mark_${topMark.id}`]}>
        <div className={styles.top_mark_tooltip}>
          <p>{topMark.markTooltip}</p>
        </div>
        <div className={styles.home_top_anim}>
          <div ref={container}></div>
          <TopMarkIcon></TopMarkIcon>
        </div>
      </div>
    </>
  );
}
