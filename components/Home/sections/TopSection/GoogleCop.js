import styles from "@/styles/components/Home/TopSection/GoogleCop.module.css";
import ArrowDown from "@/components/Shared/Icon/ArrowDown";
import Image from "next/image";
import GoogleCop from "@/components/Shared/Icon/GoogleCop";
export default function Content() {
  return (
    <div className={styles.top_google_cop}>
      <GoogleCop></GoogleCop>
    </div>
  );
}
