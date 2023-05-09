import React, { useState } from "react";
import styles from "../../styles/register.module.css";
import Link from "next/link";

export default function index() {
  const initialValues = {
    emailCust: "",
    passwordCust: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

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
            <img
              src="/logo 1.png"
              alt="logo edutama"
              className={styles.logoedu}
            />
            <h2 className="font-sans text-4xl font-semibold">New Account</h2>
            <p className={styles.plgedu}>
              Please complete the form below, use your valid data
            </p>
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
                <Link href="/">
                  <button onclick="">Continue</button>
                </Link>
              </div>

              <Link href="/login">
                <div className={styles.inputBtxcc}>
                  <button onclick="">Already Have Account?</button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
