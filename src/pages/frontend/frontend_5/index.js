import React from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import konten from "../../../../public/assets/program/fe/konten.png";
import bar from "../../../../public/assets/program/fe/bar 6.png";
import quiz from "../../../../public/assets/program/fe/quiz.png";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const page1 = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_1");
  };
  const page2 = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_2");
  };
  const page3 = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_3");
  };
  const page4 = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_4");
  };
  const page5 = (e) => {
    e.preventDefault();
    router.push("/frontend/frontend_5");
  };
  const start = (e) => {
    e.preventDefault();
    router.push("/frontend/quiz");
  };
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <h1 className="font-semibold text-5xl p-5 ml-5 mt-14">
        Creative Front-End Design <br />& Code Website
      </h1>
      <div className="container pl-5 flex mt-14 justify-around">
        <div className="w-4/6">
          <Image src={quiz} className="" onClick={start} />
          <Image src={konten} className="mt-10" />
        </div>
        <div className="w-2/6 ml-28">
          <Image src={bar} height={357} width={357} className="mr-0" />
          <div className="mt-36 border rounded-xl font-medium text-xl gap-6 overflow-hidden">
            <ul className="">
              <li onClick={page1} className="p-5 bg-green-400 ">
                01 - What is Frontend?
              </li>
              <hr />
              <li onClick={page2} className="p-5 bg-green-400">
                02 - Frontend Roadmap
              </li>
              <hr />
              <li onClick={page3} className="p-5 bg-green-400">
                03 - Key Frontend Skills
              </li>
              <hr />
              <li onClick={page4} className="p-5 bg-green-400">
                04 - Build Portofolio
              </li>
              <hr />
              <li onClick={page5} className="p-5 bg-[#007AFF0F]">
                Quiz
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
