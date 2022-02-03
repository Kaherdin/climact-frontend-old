import styles from "@/styles/components/Home/Footer/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_info}>
          <div className={styles.container}>
            <div className={styles.footer_info_inner}>
              <div className={styles.footer_info_left}>
                <p>Want access to a demo?</p>
              </div>
              <div className={styles.footer_info_right}>
                <a href="" className={styles.btn}>
                  Get a demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_main}>
          <div className={styles.container}>
            <div className={styles.footer_main_inner}>
              <div className={styles.footer_main_left}>
                <a className={styles.footer_main_logo}>
                  <Image
                    alt=""
                    src="https://climate.ai/wp-content/themes/climateai/images/logo_footer.svg"
                    height="48px"
                    width="100%"
                  />
                </a>
              </div>
              <div className={styles.footer_main_right}>
                <div className={styles.footer_main_nav}>
                  <a href="#">Home</a>
                  <a href="#">Solutions</a>
                  <a href="#">About</a>
                  <a href="#">Work with us</a>
                  <a href="#">Blog</a>
                  <a href="#">Podcast</a>
                </div>
                <div className={styles.footer_main_bottom}>
                  <p className={styles.footer_main_cop}>
                    © 2021 ClimateAI. All rights reserved.
                  </p>
                  <div className={styles.footer_main_links}>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
