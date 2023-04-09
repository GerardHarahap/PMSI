import React from "react";
import styles from "../../styles/register.module.css";

export default function index() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.imgBx}>
          <img src="/studydaftar 1.png" alt="" />
        </div>
        <div className={styles.contentBx}>
          <div>
            <img src="" alt="" />
          </div>
          <div className={styles.lgedu}>
            <img src="/logo 1.png" alt="logo edutama" className={styles.logoedu} />
            <h2>New Account</h2>
            <p className={styles.plgedu}>Please complete the form below, use your valid data</p>
          </div>
          <div className={styles.formBx}>
            <form>
              <div className={styles.inputBx}>
                <span>Name</span>
                <input type="text" />
              </div>
              <div className={styles.inputBx}>
                <span>Email Address</span>
                <input type="text" />
              </div>
              <div className={styles.inputBx}>
                <span>Username</span>
                <input type="text" />
              </div>
              <div className={styles.inputBx}>
                <span>Password</span>
                <input type="password" />
              </div>
              <div className={styles.inputBtxc}>
                <button onclick="javascript:location.href='SignupPage.html'">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
