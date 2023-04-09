import React from "react";
import styles from "../../styles/contactus.module.css";
import Link from "next/link";

export default function ndex() {
  return (
    <>
      <div className={styles.cover}>
        <div className={styles.navbar}>
          <img className={styles.nav_first} src="/logo_1.png" />

          <ul className={styles.nav_second}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#program">Program</a>
            </li>
            <li>
              <a>Tutors</a>
            </li>
            <li>
              <a href="#footer">About Us</a>
            </li>
            <li>
              <a>Message Box</a>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Person</Link>
            </li>
          </ul>

          <ul className={styles.nav_third}>
            <li>
              <Link className={styles.sign_in} href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.register} href="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>

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

        <div className={styles.bg_tambahan}></div>

        <div id="footer">
          <div className={styles.container_1}>
            <div className={styles.c_01}>
              <img src="/logo 1.png" />
              <p> Edutama provides e-learning solutions for companies, universities and individual professionals. </p>
            </div>

            <div className={styles.c_02}>
              <p> Course</p>

              <div className={styles.c_02_navigation}>
                <ul className={styles.ul_1}>
                  <li>
                    <a>Creative Front End</a>
                  </li>
                  <li>
                    <a>Back-End Architecture</a>
                  </li>
                  <li>
                    <a>UI/UX Design</a>
                  </li>
                  <li>
                    <a>Project Management</a>
                  </li>
                </ul>

                <ul className={styles.ul_2}>
                  <li>
                    <a>Creative Front End</a>
                  </li>
                  <li>
                    <a>Back-End Architecture</a>
                  </li>
                  <li>
                    <a>UI/UX Design</a>
                  </li>
                  <li>
                    <a>Project Management</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.c_03}>
              <p> Menu </p>
              <ul className={styles.menu_ul}>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Program</a>
                </li>
                <li>
                  <a>Tutors</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Message Box</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
              </ul>
            </div>

            <div className={styles.c_04}>
              <p className={styles.contact_p}> Contact</p>
              <div className={styles.contact_navigation}>
                <p className={styles.blue}> support@edutama.com</p>
                <p className={styles.blue}> (+62) 881-0240-83363 </p>
                <p className={styles.grey}> Or simply click wa.me/+62881024083363</p>
                <div className={styles.logo_contact}>
                  <img src="/Sosmed.png" />
                  <img src="/Frame 201.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container_2}>
            <p> Copyright © 2023 PT Zona Edutama & Co. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </>
  );
}