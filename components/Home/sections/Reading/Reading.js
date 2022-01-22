/* eslint-disable prettier/prettier */
import styles from "@/styles/components/Home/Reading/Reading.module.css";
import homeStyle from "@/styles/components/Home/Home.module.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
import NewsSlider from "./NewsSlider";

export default function Reading() {
  return (
    <section className={styles.reading_section}>
      <div className="container">
        <div
          className={`${homeStyle.description_block} ${styles.description_block}`}
        >
          <h2 className={`${homeStyle.title_block} ${styles.title_block}`}>
            Building a profitable and sustainable industry around climate
            resilience requires a lot of dialogue with industry experts
          </h2>
          <p className={homeStyle.text_block}>
            We summarize our most insightful learnings twice per month for
            agri-business and supply chain executives, farmers, investors, and
            climate conscious leaders that want to stay ahead of the curve. No
            fluff, just concise insider knowledge on the co-evolution of climate
            change and agriculture.
          </p>
        </div>
        <div className={styles.subscribe_block}>
          <p className={styles.subscribe_text}>Subscribe to our newsletter</p>
          <div>
            <Form className={styles.subscribe_form}>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input />
                <FormFeedback>This field is required.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input />
              </FormGroup>
              <Button className={styles.subscribe_button}>Subscribe</Button>
            </Form>
          </div>
        </div>
      </div>
      <NewsSlider />
    </section>
  );
}
