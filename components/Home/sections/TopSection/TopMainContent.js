import styles from "@/styles/components/Home/TopSection/TopMainContent.module.css";
import ArrowDown from "@/components/Shared/Icon/ArrowDown";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

export default function Content() {
  return (
    <div className={styles.container} style={{}}>
      <div className={styles.top_inner}>
        <div className={styles.top_info}>
          <h1
            className={styles.top_info_title}
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            Accelerating climate resilience in mission-critical supply chains
          </h1>
        </div>
        <a className={styles.top_scroll} href="#tools_section">
          <span className={styles.svg_arrow_down}>
            <ArrowDown></ArrowDown>
          </span>
        </a>
      </div>
    </div>
  );
}
