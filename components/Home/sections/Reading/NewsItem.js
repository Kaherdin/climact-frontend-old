import styles from "@/styles/components/Home/Reading/NewsItem.module.css";
import Image from "next/image";
import image from "../../../../public/assets/images/Home/reading-slide-image.png";

export default function NewsItem() {
  return (
    <div className={styles.new_box}>
      <a className={styles.new_box_img}>
        <Image src={image} alt="fdsaf" width={410} height={280} />
      </a>
      <div className={styles.new_box_info}>
        <p className={styles.new_box_date}>Sep 17, 2021</p>
        <p className={styles.new_box_title}>
          Cutting-edge research called “attribution science” makes climate risks
          real for companies
        </p>
        <a href="#" className={styles.new_box_more} target="_blank">
          Read now
        </a>
      </div>
    </div>
  );
}
