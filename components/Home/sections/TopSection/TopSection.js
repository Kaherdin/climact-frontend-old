import styles from "@/styles/components/Home/TopSection/TopSection.module.css";
import TopMainContent from "./TopMainContent";
import GoogleCop from "./GoogleCop";
import Image from "next/image";
import TopMark from "./TopMark";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

export default function Content() {
  // const renderTopMark = (data) => {
  //   return data.map((mark) => {
  //     return;
  //   });
  // };
  return (
    <>
      <TopMainContent></TopMainContent>
      <GoogleCop></GoogleCop>
      <p className={styles.top_bottom_text}>
        This information is a hypothetical example of the type of insights we
        can deliver
      </p>
      <TopMark
        topMark={{
          markTooltip: "Low probability of early season frost this year",
          id: 1,
        }}
      ></TopMark>
      <TopMark
        topMark={{
          markTooltip:
            "Cumulative growing degree days above average this summer",
          id: 2,
        }}
      ></TopMark>
      <TopMark
        topMark={{
          markTooltip:
            "Cumulative growing degree days above average this summer",
          id: 3,
        }}
      ></TopMark>
      <TopMark
        topMark={{
          markTooltip:
            "Probability of late season precipitation is 5x higher than usual",
          id: 4,
        }}
      ></TopMark>
      <TopMark
        topMark={{
          markTooltip:
            "Flood inducing river conditions to increase by 10 - 25%",
          id: 5,
        }}
      ></TopMark>
      <TopMark
        topMark={{
          markTooltip: "Summers to be 20% - 40% drier",
          id: 6,
        }}
      ></TopMark>
    </>
  );
}
