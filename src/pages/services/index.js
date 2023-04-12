import React from "react";
import styles from "../../styles/services.module.css";
import Link from "next/link";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function () {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />

        <div className={styles.content}>
          <h1> Our Services </h1>
          <p> These are our main services to help you use Edutama’s website </p>

          <div className={styles.content_isi}>
            <div className={styles.border}>
              <h1> How to Activate Program </h1>
              <p> These are the steps you can follow to activate the program... </p>
              <Link href="/services/activate" legacyBehavior>
                <a> Read more </a>
              </Link>
            </div>

            <div className={styles.border}>
              <h1> How to Contact Tutors </h1>
              <p> These are the steps you can follow to contact the program... </p>
              <Link href="/services/contacttutor" legacyBehavior>
                <a> Read more </a>
              </Link>
            </div>

            <div className={styles.border}>
              <h1> How to Submit Complaint </h1>
              <p> These are the steps you can follow to submit the program... </p>
              <Link href="/services/submitcomplaint" legacyBehavior>
                <a> Read more </a>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
