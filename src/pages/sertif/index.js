import React from "react";
import Image from "next/image";
import sertif from "../../../public/assets/program/sertif.png";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function index() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mt-20 mx-auto ">
        <h1 className="text-4xl font-semibold mb-10">Your Certificate</h1>
        <Image src={sertif} />
      </div>

      <Footer />
    </div>
  );
}
