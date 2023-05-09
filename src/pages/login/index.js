import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import img1 from "../../../public/assets/login/study 1,5.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    router.push("/");
  };

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
            <p className={styles.plgedu}>
              Let's continue studying at Edutama to achieve your goals
            </p>
          </div>
          <div id="LoginForm" className={styles.formBx}>
            <form id="FormLogin" onSubmit={handleSubmit}>
              <div className={styles.inputBx}>
                <label className="form-label" htmlFor="emailLogin">
                  Email
                </label>
                <input
                  id="emailLogin"
                  type="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputBx}>
                <span>Password</span>
                <input type="password" maxlength="30" />
              </div>

              <a href="#" className={styles.forgetget}>
                Forget Password?
              </a>

              <button type="submit" className={styles.inputBtxs}>
                Sign In
              </button>

              <Link href="/register">
                <button className={styles.inputBtxc}>Create New Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
