import React from "react";
import styles from "../../styles/contactus.module.css";
import Link from "next/link";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function ndex() {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />

        <div className={styles.content}>
          <h1>We’re Happy to Help You Today!</h1>
          <p>Contact us through one of the channels which we have provided below</p>

          <div className={styles.border}>
            <img src="/contact email.png" />
            <p> Contact via Email</p>
            <a href="mailto:support@edutama.com"> Chat Now </a>
          </div>

          <div className={styles.border}>
            <img src="/ic_outline-whatsapp.png" />
            <p> Contact via WhatsApp</p>
            <a href="https://wa.me/62881024083363" target="_blank">
              {" "}
              Chat Now{" "}
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
