import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import desc from "../../../../public/assets/program/details/desc_be.png";
import vid from "../../../../public/assets/program/details/vid_be.png";

export default function index() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container font-sans">
        <div>
          <Image src={desc} className="mx-auto mt-16" />
        </div>
        <div className="flex mt-24  ">
          <div className="">
            {" "}
            <Image
              src={vid}
              className="
            "
            />
            <h1 className="text-4xl font-semibold mt-4 ml-10">
              Develop Your Skills
            </h1>
            <p className="w-1/2 font-xl mt-4 ml-10 text-justify">
              Our Backend program covers the basic concepts of web and
              application technologies, backend architectures, and technologies
              used in the development of modern web applications. You will also
              learn about database usage and how to integrate backend and
              frontend components in a web application. We will guide you
              through the development of Node.js and MongoDB-based applications,
              and provide advice and best practices for building scalable and
              efficient web applications. In this Backend program at Edutama,
              you will learn from expert tutors who have extensive experience in
              building web applications. This program is designed to be
              accessible anywhere, anytime, and on any device. Each lesson is
              accompanied by practical assignments and projects that help you
              master the skills being taught.
            </p>
          </div>
          <div className="border rounded-xl border-transparent shadow-md ml-5">
            <h1 className="text-5xl font-semibold ml-5">
              Interaction Design and Usability
            </h1>
            <h1 className="text-5xl font-semibold ml-5">
              Principles and Practices
            </h1>
            <p className="font-medium ml-5">
              Join our Backend program and learn how to build responsive and
              accessible web applications using modern backend technologies such
              as Node.js and MongoDB.
            </p>
            <button className="bg-[#0084FE] text-white font-semibold w-3/4  rounded-xl mx-auto">
              Enroll
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
