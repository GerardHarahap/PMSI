import React from "react";
import Image from "next/image";
import bep from "../../../public/assets/program/be.png";
import fep from "../../../public/assets/program/fe.png";
import pmp from "../../../public/assets/program/pm.png";
import dbap from "../../../public/assets/program/DBA.png";
import uip from "../../../public/assets/program/ui.png";
import rating from "../../../public/assets/program/rating.png";
import { useRouter } from "next/router";

import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function index() {
  const router = useRouter();
  const be = (e) => {
    e.preventDefault();
    router.push("/program/backend");
  };
  const fe = (e) => {
    e.preventDefault();
    router.push("/program/frontend");
  };
  const dba = (e) => {
    e.preventDefault();
    router.push("/program/dba");
  };
  const pm = (e) => {
    e.preventDefault();
    router.push("/program/projectmanager");
  };
  const ui = (e) => {
    e.preventDefault();
    router.push("/program/ui");
  };
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto font-sans pt-12 px-11">
        <div>
          <h1 className="font-semibold text-6xl text-[#1B1B1B]">
            Edutama Program
          </h1>
          <p className="font-medium font-xl text-[#8B93A2]">
            We provide various interesting classes for beginner!
          </p>
        </div>

        <div className="mx-auto container mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-10">
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto  flex justify-center  flex-col mb-10 sm:mb-0 flex-wrap pb-6   ">
            <Image alt="salma" src={pmp} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-left mt-4 ml-3">
              Project Management
            </p>
            <p className="text-[#1B1D1F] text-xl text-left  ml-3">
              Fundamentals
            </p>

            <p className="text-[#8B93A2] text-left ml-3">
              Learn the fundamentals from planning
            </p>
            <p className="text-[#8B93A2] text-left ml-3">
              to delivery the project to your team.
            </p>
            <Image src={rating} className="p-2 mx-auto mt-3" />
            <button
              onClick={pm}
              className="bg-[#0084FE] text-white w-3/4 rounded-xl mx-auto p-2 mt-2"
            >
              See Details
            </button>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto  flex justify-center  flex-col mb-10 sm:mb-0 flex-wrap pb-6   ">
            <Image alt="salma" src={fep} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-left mt-4 ml-3">
              Creative Frontend:
            </p>
            <p className="text-[#1B1D1F] text-xl text-left  ml-3">
              Design & Code Website
            </p>

            <p className="text-[#8B93A2] text-left ml-3">
              Learn how to design and code
            </p>
            <p className="text-[#8B93A2] text-left ml-3">
              beautiful website using HTML, CSS, and Javascript.
            </p>
            <Image src={rating} className="p-2 mx-auto mt-3" />
            <button
              onClick={fe}
              className="bg-[#0084FE] text-white w-3/4 rounded-xl mx-auto p-2 mt-2"
            >
              See Details
            </button>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto  flex justify-center  flex-col mb-10 sm:mb-0 flex-wrap pb-6   ">
            <Image alt="salma" src={bep} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-left mt-4 ml-3">
              Backend Architect: Designing
            </p>
            <p className="text-[#1B1D1F] text-xl text-left  ml-3">
              High-Performing Web Systems
            </p>

            <p className="text-[#8B93A2] text-left ml-3">
              Learn about application technologies, backend
            </p>
            <p className="text-[#8B93A2] text-left ml-3">
              architecture, and technologies that used.
            </p>
            <Image src={rating} className="p-2 mx-auto mt-3" />
            <button
              onClick={be}
              className="bg-[#0084FE] text-white w-3/4 rounded-xl mx-auto p-2 mt-2"
            >
              See Details
            </button>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto  flex justify-center  flex-col mb-10 sm:mb-0 flex-wrap pb-6   ">
            <Image alt="salma" src={dbap} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-left mt-4 ml-3">
              Database Architecture: Building
            </p>
            <p className="text-[#1B1D1F] text-xl text-left  ml-3">
              High-Performance Databases
            </p>

            <p className="text-[#8B93A2] text-left ml-3">
              Learn the fundamentals from planning
            </p>
            <p className="text-[#8B93A2] text-left ml-3">
              to delivery the project to your team.
            </p>
            <Image src={rating} className="p-2 mx-auto mt-3" />
            <button
              onClick={dba}
              className="bg-[#0084FE] text-white w-3/4 rounded-xl mx-auto p-2 mt-2"
            >
              See Details
            </button>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto  flex justify-center  flex-col mb-10 sm:mb-0 flex-wrap pb-6   ">
            <Image alt="salma" src={uip} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-left mt-4 ml-3">
              Interaction Design and Usability:
            </p>
            <p className="text-[#1B1D1F] text-xl text-left  ml-3">
              Principles and Practices
            </p>

            <p className="text-[#8B93A2] text-left ml-3">
              Learn how to create interaction design and
            </p>
            <p className="text-[#8B93A2] text-left ml-3">
              usability use principles and practices.
            </p>
            <Image src={rating} className="p-2 mx-auto mt-3" />
            <button
              onClick={ui}
              className="bg-[#0084FE] text-white w-3/4 rounded-xl mx-auto p-2 mt-2"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
