/* eslint-disable prettier/prettier */
import styles from "@/styles/components/Home/Reading/NewsItem.module.css";

export default function NewsItem() {
  return (
    <div className={styles.new_box}>
      <a className={styles.new_box_img}>
        <img
          className={styles.img}
          src="https://cdn-images-1.medium.com/max/1001/1*awqrmOdqpaN3X2Cl0bCQzQ.png"
          alt=""
        />
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
