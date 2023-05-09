import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import desc from "../../../../public/assets/program/details/desc_dba.png";
import vid from "../../../../public/assets/program/details/vid_dba.png";

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
              Our Database Administration program is designed to help you
              understand and master the basics of database management and
              security. In this program, you will learn about database modeling,
              database installation and configuration, backup and recovery,
              tuning database performance, and database security strategies. We
              will provide you with the practical and theoretical knowledge
              necessary to manage and secure databases in a production
              environment. You will learn from expert tutors with extensive
              industry experience, and will have the opportunity to interact
              with fellow students and mentors. The Database Administration
              program at Edutama is suitable for those of you who want to deepen
              their knowledge and skills in managing databases and are looking
              for career opportunities in the IT field. We provide course
              materials that can be accessed anywhere and anytime, as well as
              provide assignments and practical projects that help you
              understand the concepts being taught.
            </p>
          </div>
          <div className="border rounded-xl border-transparent shadow-md ml-5">
            <h1 className="text-5xl font-semibold ml-5">
              Database Architecture: Building
            </h1>
            <h1 className="text-5xl font-semibold ml-5">
              High-Performance Databases
            </h1>
            <p className="font-medium ml-5">
              Join our Database Administration program now and start deepening
              your knowledge and skills in managing databases!
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
