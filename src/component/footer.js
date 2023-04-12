import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.cover}>
        <div className={styles.bg_tambahan}></div>

        <footer id="footer" className={styles.footer}>
          <div className={styles.container_1}>
            <div className={styles.c_01}>
              <img src="/logo 1.png" />
              <p>
                Edutama provides e-learning <br />
                solutions for companies,
                <br />
                universities and individual <br />
                professionals.
              </p>
            </div>

            <div className={styles.c_02}>
              <p>Course</p>

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
                    <a>Graphic Design</a>
                  </li>
                  <li>
                    <a>Video Production</a>
                  </li>
                  <li>
                    <a>Digital Marketing</a>
                  </li>
                  <li>
                    <a>Database Administrator</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.c_03}>
              <p>Menu</p>
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
              <p className={styles.contact_p}>Contact</p>
              <div className={styles.contact_navigation}>
                <p className="blue">support@edutama.com</p>
                <p className="blue">(+62) 881-0240-83363</p>
                <p className="grey">
                  Or simply click <br />
                  wa.me/+62881024083363
                </p>
                <div className={styles.logo_contact}>
                  <img src="/Sosmed.png" />
                  <img src="/Frame 201.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container_2}>
            <p>Copyright © 2023 PT Zona Edutama & Co. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
