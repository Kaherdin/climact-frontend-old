import styles from "@/styles/components/Home/Home.module.css";
import TopSection from "./sections/TopSection/TopSection";
import About from "./sections/About/About";
import Reading from "./sections/Reading/Reading";
import PodCast from "./sections/PodCast/PodCast";
import Intro from "./sections/Intro/Intro";
import ToolSection from "./sections/ToolSection/ToolSection";
import Footer from "../Footer";

export default function Content() {
  return (
    <>
      <section className={styles.top_section}>
        <TopSection></TopSection>
      </section>
      <ToolSection></ToolSection>
      <About />
      <Reading />
      <PodCast />
      <Intro />
      <Footer />
    </>
  );
}
