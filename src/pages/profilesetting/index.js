import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";
import sertif from "../../../public/assets/profilesetting/activity.png";
import program from "../../../public/assets/profilesetting/bookmark.png";
import logout from "../../../public/assets/profilesetting/logout.png";
import setting from "../../../public/assets/profilesetting/setting-2.png";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const mySertif = (e) => {
    e.preventDefault();
    router.push("/sertif");
  };
  const myProgram = (e) => {
    e.preventDefault();
    router.push("/myprogram");
  };
  const myProfil = (e) => {
    e.preventDefault();
    router.push("/profilesetting");
  };
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="container bg-white h-screen font-sans sm:flex sm:flex-wrap  mt-10 mb-36">
          <div className="w-1/6 h-[450px] font-sans text-xl text-[#4C535F] font-bold mt-0 border rounded-xl border-transparent shadow-lg ml-3 ">
            <ul className="mt-5 ">
              <li className="flex gap-5 mt-5" onClick={mySertif}>
                <Image src={sertif} width="31" height="31" onClick={mySertif} />
                My Certificate
              </li>
              <li className="flex gap-5 mt-5" onClick={myProgram}>
                <Image
                  src={program}
                  width="31"
                  height="31"
                  onClick={myProgram}
                />
                My Program
              </li>
              <li className="flex gap-5 mt-5" onClick={myProfil}>
                <Image
                  src={setting}
                  width="31"
                  height="31"
                  onClick={myProfil}
                />
                Settings
              </li>
            </ul>

            <div className="flex gap-5 mt-60">
              <Image src={logout} width="31" height="31" />
              <p>Log out</p>
            </div>
          </div>
          <div className="w-4/6 flex flex-col ml-10">
            <div>
              <h1 className="text-6xl font-semibold">Settings</h1>
              <p className="text-2xl pt-2">
                Account settings that may be needed
              </p>
              <p className="text-2xl pt-2">during Learning Process</p>
            </div>
            <div className="flex justify-around flex-wrap flex-row mt-10">
              <div className="border rounded-xl border-transparent shadow-lg w-2/5 p-7">
                <h1 className="text-4xl font-semibold">My Profile</h1>
                <p className="mt-4">Change your data</p>
                <Link href="/profilesetting/editprofile">
                  <button className="font-semibold bg-[#0084FE] text-white rounded-xl w-full py-2 mt-5">
                    Edit Now
                  </button>
                </Link>
              </div>
              <div className="border rounded-xl border-transparent shadow-lg w-2/5 p-7">
                <h1 className="text-4xl font-semibold">My Password</h1>
                <p className="mt-4">Change your password</p>
                <Link href="/profilesetting/editpassword">
                  <button className="font-semibold bg-[#0084FE] text-white rounded-xl w-full py-2 mt-5">
                    Edit Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
