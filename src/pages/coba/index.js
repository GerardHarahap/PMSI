import React from "react";
import Image from "next/image";
import salma from "../../../public/assets/tutors/salma.png";
import gerard from "../../../public/assets/tutors/gerard.png";
import cepkow from "../../../public/assets/tutors/cepkow.png";
import jiddan from "../../../public/assets/tutors/jiddan.png";
import latifha from "../../../public/assets/tutors/latifha.png";
import naufla from "../../../public/assets/tutors/naufla.png";
import nijar from "../../../public/assets/tutors/nijar.png";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function index() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto font-sans pt-12 px-11">
        <div>
          <h1 className="font-semibold text-6xl text-[#1B1B1B]">Our Tutor</h1>
          <p className="font-medium font-xl text-[#8B93A2]"> Edutama works with dozens of mentors with expertise and experience in their fields</p>
        </div>

        <div className="mx-auto container mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-10">
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={salma} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Salma Riyanti Hanifah</p>
            <p className="text-[#8B93A2] text-center mb-5">Project Management Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={gerard} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Gerard Abdul Rasyid</p>
            <p className="text-[#8B93A2] text-center mb-5">Front-End Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={latifha} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Latifha Aini</p>
            <p className="text-[#8B93A2] text-center mb-5">Database Administration Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={cepkow} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Chevko Ronaldi Savino</p>
            <p className="text-[#8B93A2] text-center mb-5">Front-End Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={jiddan} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Muhammad Jiddan Gumilang</p>
            <p className="text-[#8B93A2] text-center mb-5">Front-End Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={naufla} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Naufla Zahrani Fikar</p>
            <p className="text-[#8B93A2] text-center mb-5">UI/UX Design Tutor</p>
          </div>
          <div className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0">
            <Image alt="salma" src={nijar} className="mx-auto" />

            <p className="text-[#1B1D1F] text-xl text-center mt-4">Nizar Sya Bana</p>
            <p className="text-[#8B93A2] text-center mb-5">Back-End Tutor</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
