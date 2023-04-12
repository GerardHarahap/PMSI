import React from "react";
import styles from "../../../styles/activate.module.css";
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
            <div className={styles.border_1}>
              <img src="/mdi_book-open.png" />
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

            <div className={styles.border_2}>
              <img src="/ic_round-call-to-action.png" />
              <Link href="/services/submitcomplaint" legacyBehavior>
                <a>Submit Complaint</a>
              </Link>
            </div>
          </div>

          <div className={styles.right_content}>
            <h1> How to Activate Program </h1>
            <div className={styles.border_3}>
              <p> These are the steps you can follow to activate the program on the Edutama E-Learning Platform : </p>
              <ol>
                <li>1. Create a user account or log in to an account you already have </li>
                <li>2. Find the program you want to activate and register yourself</li>
                <li>3. After registering with the program, you will receive confirmation of registration via the email that you registered earlier</li>
                <li>4. Open the activated program and start studying</li>
                <li>5. Follow all instructions and tasks given and complete these tasks properly and on time</li>
                <li>6. Don't hesitate to ask questions or ask tutors for help and consulting sessions if you have difficulty understanding the material</li>
              </ol>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
