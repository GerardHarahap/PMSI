import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import styles from "../../styles/messagebox.module.css";
import images from "../../../public/assets/messagebox/image 70.png";

export default function index() {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />
        <div className={styles.content}>
          <div class={styles.content_left}>
            <Image src={images} className={styles.images} />
          </div>
          <div className={styles.content_right}>
            <h1>
              {" "}
              Submit Complaint about <br /> Our Product via E-mail{" "}
            </h1>
            <h2 className={styles.headinglogin}> E-mail </h2>
            <input className={styles.inputbox} type="text" id="username" name="username" />
            <h2 className={styles.headinglogin}> Subject E-mail </h2>
            <input class={styles.inputbox} type="text" id="username" name="username" />
            <h2 className={styles.headinglogin}> E-mail Contain </h2>
            <input class={styles.inputbox2} type="text" id="username" name="username" />
            <button className={styles.button}>Kirim E-Mail</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
