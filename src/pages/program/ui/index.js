import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import desc from "../../../../public/assets/program/details/desc_ui.png";
import vid from "../../../../public/assets/program/details/vid_ui.png";

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
              Our UI/UX program is the right solution for those of you who want
              to develop skills in functional and attractive user interface
              design. In this program, you will learn about responsive design,
              effective layouts, and developing intuitive user experiences.
              We'll provide you with the practical knowledge and theory
              necessary to design attractive, easy-to-use user interfaces, and
              help you understand how design decisions can affect the user
              experience. You will learn from expert tutors with extensive
              industry experience, and will have the opportunity to interact
              with fellow students and mentors. The UI/UX Design Program at
              Edutama is suitable for those of you who want to develop skills in
              user interface design and are looking for career opportunities in
              the field of UI/UX design. We provide course materials that can be
              accessed anywhere and anytime, as well as provide assignments and
              practical projects that help you understand the concepts being
              taught.
            </p>
          </div>
          <div className="border rounded-xl border-transparent shadow-md ml-5">
            <h1 className="text-5xl font-semibold ml-5">
              Interaction Design and Usability :
            </h1>
            <h1 className="text-5xl font-semibold ml-5">
              Principles and Practices
            </h1>
            <p className="font-medium ml-5">
              If you interested in designing the interface, come and join our
              UI/UX Design program now and start developing your skills in UI/UX
              Design!
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
