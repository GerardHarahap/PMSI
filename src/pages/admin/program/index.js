import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";
import logout from "../../../../public/assets/profilesetting/logout.png";
import prg from "../../../../public/assets/program/1.png";
import tutor from "../../../../public/assets/program/2.png";
import msg from "../../../../public/assets/program/3.png";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const mySertif = (e) => {
    e.preventDefault();
    router.push("/admin/program");
  };
  const myProgram = (e) => {
    e.preventDefault();
    router.push("/admin/tutor");
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
                <Image src={prg} width="31" height="31" onClick={mySertif} />
                Program
              </li>
              <li className="flex gap-5 mt-5" onClick={myProgram}>
                <Image src={tutor} width="31" height="31" onClick={myProgram} />
                Tutor
              </li>
              <li className="flex gap-5 mt-5" onClick={myProfil}>
                <Image src={msg} width="31" height="31" onClick={myProfil} />
                Message Box
              </li>
            </ul>

            <div className="flex gap-5 mt-60">
              <Image src={logout} width="31" height="31" />
              <p>Log out</p>
            </div>
          </div>
          <div className="w-4/6 flex flex-col ml-10">
            <div>
              <h1 className="text-6xl font-semibold">Add Program</h1>
            </div>
            <div className="flex justify-around flex-wrap flex-row mt-10">
              <table className="border p-2">
                <thead className="border p-2">
                  <tr className="border p-2">
                    <th>Module & Link Video</th>
                    <th>Quiz</th>
                    <th>Choice A</th>
                    <th>Choice B</th>
                    <th>Choice C</th>
                    <th>Choice D</th>
                  </tr>
                </thead>
                <tbody className="border p-4">
                  <tr className="border p-4">
                    <td className="border p-4">Add Link Video 1</td>
                    <td className="border p-4">Add Quiz 1</td>
                    <td className="border p-4">Choice A</td>
                    <td className="border p-4">Choice B</td>
                    <td className="border p-4">Choice C</td>
                    <td className="border p-4">Choice D</td>
                  </tr>
                  <tr className="border p-4">
                    <td className="border p-4">add Link Video 2</td>
                    <td className="border p-4">add Quiz 2</td>
                    <td className="border p-4">Choice A</td>
                    <td className="border p-4">Choice B</td>
                    <td className="border p-4">Choice C</td>
                    <td className="border p-4">Choice D</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
