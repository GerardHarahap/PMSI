import React from "react";
import Image from "next/image";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import styles from "../../styles/aboutus.module.css";

export default function index() {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />
        <div className={styles.contentt1}>
          <div className={styles.basabasi}>
            <h1>
              Edutama Helps You 🌟 <br /> Becomes More Experienced
            </h1>
          </div>
        </div>

        <div className={styles.isiann}>
          <div className={styles.paragrap1}>
            <h1>What is Edutama?</h1>
            <p>
              Edutama is an e-learning platform that comes from the word "Edu" which stands for "Education" or "Education" and the word "Tama" which in Indonesian means "the best" or "most important".
              <br />
              <br />
              Thus, Edutama can be interpreted as an e-learning platform that offers the best or most important education.
            </p>
          </div>

          <div className={styles.paragrap23}>
            <div className={styles.paragrap2}>
              <h1>Our Vision</h1>
              <p>To be the leading and most trusted e-learning platform in Indonesia, providing easy, effective and affordable access for everyone to learn and improve their skills.</p>
            </div>
            <div className={styles.paragrap3}>
              <h1>Our Mission</h1>
              <ol>
                <li>Provide high quality and relevant learning materials through online classes.</li>
                <li>Develop an innovative and easy-to-use e-learning platform.</li>
                <li>Building strong partnerships with educational institutions, companies and other organizations.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className={styles.box_quote}>
          <div className={styles.quote}>
            <p>
              "<strong>Education</strong> is the most <strong>powerful weapon</strong> which you can use to change the world"
            </p>
          </div>
        </div>

        <div className={styles.contactuss}>
          <button>Contact Us</button>
        </div>
        <Footer />
      </div>
    </>
  );
}
