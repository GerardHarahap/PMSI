import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.cover}>
        <Navbar />

        <div className={styles.content}>
          <div className={styles.header}>
            <h1>
              Learn Any Skills At The <br />
              Comfort Of Your Own <br />
              Home
            </h1>
            <p>
              Study with our expert mentor to boost your skills for the next <br />
              level and reach the bright future.
            </p>
          </div>

          <div className={styles.button}>
            <a className={styles.get_started}> Get Started </a>
          </div>

          <div className={styles.hero_2}>
            <div className={styles.hero_21}>
              <h1>15K</h1>
              <p>Students</p>
            </div>
            <div className={styles.hero_21}>
              <h1>27+</h1>
              <p>Courses</p>
            </div>
            <div className={styles.hero_21}>
              <h1>20+</h1>
              <p>Expert Mentor</p>
            </div>
          </div>

          <div className={styles.testimonial}>
            <img src="/Testimonial.png" />
          </div>
        </div>

        <div className={styles.program}>
          <h1 id="program">Our Popular Program</h1>
          <p>
            Get the information and follow a series of our exciting <br />
            programs in Edutama!
          </p>
          <div className={styles.program_container}>
            <div className={styles.program_child}>
              <img src="/Rectangle 6.png" />
              <h1>Project Management</h1>
              <p>
                Project Management: Learn the <br />
                fundamentals from planning to delivery <br />
                the project to your team.
              </p>

              <div className={styles.program_tambahan}>
                <div className={styles.program_tambahan_01}>
                  <img className={styles.gambar1} src="/pm1.png" />
                  <p>5x Lessons</p>
                </div>
                <img className={styles.gambar2} src="/pm2.png" />
              </div>
            </div>

            <div className={styles.program_child}>
              <img src="/Rectangle 9.png" />
              <h1>Creative Front-End</h1>
              <p>
                Creative Front End: Learn how to design <br />
                and code beautiful websites using HTML, <br />
                CSS, and Javascript.
              </p>
              <div className={styles.program_tambahan}>
                <div className={styles.program_tambahan_01}>
                  <img className={styles.gambar1} src="/fe1.png" />
                  <p>6x Lessons</p>
                </div>
                <img className={styles.gambar2} src="/fe2.png" />
              </div>
            </div>

            <div className={styles.program_child}>
              <img src="/Rectangle 12 (1).png" />
              <h1>UI/UX Design</h1>
              <p>
                UI/UX Design: Learn how to create <br />
                interaction design and usability use <br />
                principles and practices.
              </p>
              <div className={styles.program_tambahan}>
                <div className={styles.program_tambahan_01}>
                  <img className={styles.gambar1} src="/uiux1.png" />
                  <p>4x Lessons</p>
                </div>
                <img className={styles.gambar2} src="/uiux2.png" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefit}>
          <img className={styles.profiles} src="/Profiles.png" />
          <div>
            <h1 className={styles.header_benefit}>
              Benefits from Our Online <br />
              Learning
            </h1>
            <div className={styles.content_benefit}>
              <img src="/certificate.png" />
              <h1>Certificates</h1>
            </div>
            <div className={styles.content_benefit}>
              <img src="/short.png" />
              <h1>Short Video</h1>
            </div>
            <div className={styles.content_benefit}>
              <img src="/expert.png" />
              <h1>Expert Training</h1>
            </div>
          </div>
        </div>

        <div className={styles.university} id="partners">
          <h1 className={styles.header}>
            We Collaborate With 10+ Leading <br />
            Universities And Company
          </h1>
          <img src="/LOGO.png" />
        </div>
        <Footer />
      </div>
    </>
  );
}
