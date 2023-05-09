import React from "react";
import axios from "axios";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";
import back from "../../../../public/assets/profilesetting/BACK.png";
import sertif from "../../../../public/assets/profilesetting/activity.png";
import program from "../../../../public/assets/profilesetting/bookmark.png";
import logout from "../../../../public/assets/profilesetting/logout.png";
import setting from "../../../../public/assets/profilesetting/setting-2.png";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const handleClick = (e) => {
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
              <li className="flex gap-5 mt-5">
                <Image src={sertif} width="31" height="31" />
                My Certificate
              </li>
              <li className="flex gap-5 mt-5">
                <Image src={program} width="31" height="31" />
                My Program
              </li>
              <li className="flex gap-5 mt-5">
                <Image src={setting} width="31" height="31" />
                Settings
              </li>
            </ul>

            <div className="flex gap-5 mt-60">
              <Image src={logout} width="31" height="31" />
              <p>Log out</p>
            </div>
          </div>
          <div className="w-4/6 flex ml-10 justify-center p-3">
            <div className="">
              <Image src={back} width="68" height="68" onClick={handleClick} />
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-10">
                <h1 className="text-6xl font-semibold">Edit Profile</h1>
                <p className="text-2xl">Enter valid information to make the</p>
                <p className="text-2xl">learning process easier</p>
              </div>

              <div className="justify-center border rounded-xl border-transparent shadow-lg p-10">
                <form>
                  <div className="mx-auto  p-3">
                    <label>Name</label>
                    <div className="mx-auto ">
                      <input
                        type="text"
                        className="bg-[#E0E4EC] rounded w-full"
                      />
                    </div>
                  </div>
                  <div className="mx-auto p-3">
                    <label>Email Address</label>
                    <div>
                      <input
                        type="text "
                        className="bg-[#E0E4EC] rounded w-full"
                      />
                    </div>
                  </div>
                  <div className="mx-auto  p-3">
                    <label>Username</label>
                    <div>
                      <input
                        type="text"
                        className="bg-[#E0E4EC] rounded w-full"
                      />
                    </div>
                  </div>
                  <div className=" mx-auto p-3">
                    <button
                      className="font-semibold bg-[#0084FE] text-white rounded-xl w-full py-2 mt-5"
                      type="submit"
                    >
                      Edit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
