import sacramento from "../../public/assets/images/Home/sacramento.png";
import styles from "@/styles/components/Home/Home.module.css";
import TopSection from "./sections/TopSection/TopSection";
import Image from "next/image";
import About from "./sections/About/About";
import Reading from "./sections/Reading/Reading";
import PodCast from "./sections/PodCast/PodCast";
import Intro from "./sections/Intro/Intro";
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
    <>
      <section className={styles.top_section}>
        <TopSection></TopSection>
      </section>
      <About />
      <Reading />

      <PodCast />
      <Intro />
    </>
  );
}
