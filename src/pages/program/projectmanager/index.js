import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import desc from "../../../../public/assets/program/details/desc_pm.png";
import vid from "../../../../public/assets/program/details/vid_pm.png";

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
              Our Project Management program is designed to help you develop
              skills in project management and become an effective project
              manager. In this program, you will learn about project management
              concepts, including planning, organizing, controlling, and
              supervising projects. We will provide you with the practical and
              theoretical knowledge necessary to manage projects successfully,
              as well as help you understand how to build strong relationships
              with project teams and stakeholders. You will learn from expert
              tutors with extensive industry experience, and will have the
              opportunity to interact with fellow students and mentors. The
              Project Management program at Edutama is suitable for those of you
              who want to develop skills in project management and are looking
              for career opportunities in project management. We provide course
              materials that can be accessed anywhere and anytime, as well as
              provide assignments and practical projects that help you
              understand the concepts being taught.
            </p>
          </div>
          <div className="border rounded-xl border-transparent shadow-md ml-5">
            <h1 className="text-5xl font-semibold ml-5">Project Managemen</h1>
            <h1 className="text-5xl font-semibold ml-5">Fundamentals</h1>
            <p className="font-medium ml-5">
              Join our Project Management program now and start developing your
              skills in project management!
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
