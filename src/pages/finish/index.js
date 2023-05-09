import React from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import sertif from "../../../public/assets/profilesetting/activity.png";
import program from "../../../public/assets/profilesetting/bookmark.png";
import logout from "../../../public/assets/profilesetting/logout.png";
import setting from "../../../public/assets/profilesetting/setting-2.png";
import abc from "../../../public/assets/program/myprogram.png";

export default function () {
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
  const myprogram = (e) => {
    e.preventDefault();
    router.push("/active");
  };
  const mydone = (e) => {
    e.preventDefault();
    router.push("/finish");
  };

  return (
    <div className="bg-white font-sans">
      <Navbar />
      <div className="container bg-white h-screen font-sans sm:flex sm:flex-wrap  mt-10 mb-36">
        <div className="w-1/6 h-[450px] font-sans text-xl text-[#4C535F] font-bold mt-0 border rounded-xl border-transparent shadow-lg ml-3 ">
          <ul className="mt-5 ">
            <li className="flex gap-5 mt-5" onClick={mySertif}>
              <Image src={sertif} width="31" height="31" onClick={mySertif} />
              My Certificate
            </li>
            <li className="flex gap-5 mt-5" onClick={myProgram}>
              <Image src={program} width="31" height="31" onClick={myProgram} />
              My Program
            </li>
            <li className="flex gap-5 mt-5" onClick={myProfil}>
              <Image src={setting} width="31" height="31" onClick={myProfil} />
              Settings
            </li>
          </ul>

          <div className="flex gap-5 mt-60">
            <Image src={logout} width="31" height="31" />
            <p>Log out</p>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className=" mx-auto text-3xl font-semibold">My Program</h1>
          <div>
            <button
              onClick={myprogram}
              className=" bg-gray-300 text-gray-500text-lg font-semibold w-full rounded-xl mt-3 p-2"
            >
              Active
            </button>
            <button
              onClick={mydone}
              className="bg-green-500 text-white text-lg font-semibold w-full rounded-xl mt-3 p-2"
            >
              Finished
            </button>
          </div>
          <Image src={abc} className="w-60" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
