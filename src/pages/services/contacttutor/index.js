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
            <div className={styles.border_2}>
              <img src="/mdi_book-open (1).png" />
              <Link href="/services/activate" legacyBehavior>
                <a>Activate Program </a>
              </Link>
            </div>

            <div className={styles.border_1}>
              <img src="/ic_round-contact-mail (1).png" />
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
            <h1> How to Contact Tutor </h1>
            <div className={styles.border_3}>
              <p> These are the steps you can follow to activate the program on the Edutama E-Learning Platform : </p>
              <ol>
                <li>1. Create a user account or log in to an account you already have.</li>
                <li>2. Find tutor information in the 'Tutors' tab</li>
                <li>3. Choose the tutor you want to contact based on the competencies and abilities you have previously selected</li>
                <li>4. Select the option you will use to contact our tutors. You can contact the tutor via email or telephone number listed on the tutor's profile page</li>
                <li>5. Write down the message or question you want to convey to the tutor in question. Don't forget to write down the name and type of program you have taken (Example: Jackson - Project Manager)</li>
              </ol>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
