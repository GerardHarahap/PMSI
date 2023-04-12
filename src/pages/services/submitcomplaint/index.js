import React from "react";
import styles from "../../../styles/submitcomplaint.module.css";
import Link from "next/link";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function index() {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />

        <div className={styles.content}>
          <div className={styles.left_content}>
            <div className={styles.border_2}>
              <img src="/mdi_book-open (1).png" />
              <Link href="/services/activate" legacyBehavior>
                <a>Activate Program </a>
              </Link>
            </div>

            <div className={styles.border_2}>
              <img src="/ic_round-contact-mail.png" />
              <Link href="/services/contacttutor" legacyBehavior>
                <a>Contact Tutor </a>
              </Link>
            </div>

            <div className={styles.border_1}>
              <img src="/ic_round-call-to-action (1).png" />
              <Link href="/services/submitcomplaint" legacyBehavior>
                <a>Submit Complaint</a>
              </Link>
            </div>
          </div>

          <div className={styles.right_content}>
            <h1> How to Submit Complaint</h1>
            <div className={styles.border_3}>
              <p> These are the steps you can follow to activate the program on the Edutama E-Learning Platform : </p>
              <ol>
                <li>Create a user account or log in to an account you already have.</li>
                <li>Find the “Message Box” column in the tab on the main page</li>
                <li>Fill in the complaint form that has been listed</li>
                <li>Make sure the data you enter is correct and accountable</li>
                <li>Write down the complaints that you want to convey in detail and clearly. </li>
                <li>Send complaints that you want to convey and wait for some time to get a response and reply from our team</li>
              </ol>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
