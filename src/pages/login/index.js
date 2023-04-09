import React from "react";
import styles from "../../styles/login.module.css";
import img1 from "../../../public/assets/login/study 1,5.png";

export default function index() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.imgBx}>
          <img src="/study 1,5.png" alt="" />
        </div>
        <div className={styles.contentBx}>
          <div className={styles.lgedu}>
            <img src="/logo 1.png" alt="" className={styles.logoedu} />
            <h2 className={styles.h2}>Welcome Back!</h2>
            <p className={styles.plgedu}>Let's continue studying at Edutama to achieve your goals</p>
          </div>
          <div className={styles.formBx}>
            <form>
              <div className={styles.inputBx}>
                <span>Username</span>
                <input type="text" />
              </div>
              <div className={styles.inputBx}>
                <span>Password</span>
                <ion-icon name="eye-outline"></ion-icon>
                <input type="password" maxlength="30" />
              </div>

              <a href="#" className={styles.forgetget}>
                Forget Password?
              </a>

              <button className={styles.inputBtxs}>Sign In</button>

              <button className={styles.inputBtxc}>Create New Account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
