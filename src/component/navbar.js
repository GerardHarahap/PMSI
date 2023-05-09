import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isUserLoggedIn);
  });

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
              <a href="/program">Program</a>
            </li>
            <li>
              <Link href="/tutor">Tutors</Link>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <Link href="/messagebox">Message Box</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contactperson">Contact Person</Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <a
              href="/profilesetting"
              className="text-white font-sans  font-semibold"
            >
              Hello, Chevko
            </a>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
