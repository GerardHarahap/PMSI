import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import desc from "../../../../public/assets/program/details/DESC_FE.png";
import vid from "../../../../public/assets/program/details/VID_fe.png";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const move = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_1");
  };
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
              Our Frontend program covers the basics of web programming such as
              HTML markup, CSS styling, and JavaScript scripting. You'll also
              learn about web design principles, responsive techniques, using
              tools like Bootstrap, and JavaScript frameworks like jQuery and
              ReactJS. In addition, you will learn how to integrate back-end and
              front-end components in a web application. In this Frontend
              program at Edutama, you will learn from expert tutors who have
              extensive experience in building websites and web applications.
              This program is designed to be accessible anywhere, anytime, and
              on any device. Each lesson is accompanied by practical assignments
              and projects that help you master the skills being taught.
            </p>
          </div>
          <div className="border rounded-xl border-transparent shadow-md ml-5">
            <h1 className="text-5xl font-semibold ml-5">Creative Frontend :</h1>
            <h1 className="text-5xl font-semibold ml-5">
              Design and Code Website
            </h1>
            <p className="font-medium ml-5">
              Join our Front-end program and learn the basics of web programming
              using HTML, CSS and JavaScript. This program is designed for
              beginners and teaches you how to design and develop websites that
              are responsive, attractive, and easy to navigate.
            </p>
            <button
              onClick={move}
              className="bg-[#0084FE] text-white font-semibold w-3/4  rounded-xl mt-5 p-3 ml-10"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
