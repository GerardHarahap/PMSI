import React from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function index() {
  const score = (e) => {
    e.preventDefault();
    router.push("/sertif");
  };
  return (
    <div className="bg-white ">
      <Navbar />
      <div className="w-1/3 mx-auto">
        <h1 className="text-3xl font-bold mt-24 text-center">Score Anda</h1>
        <h1 className="text-3xl font-semibold text-center"> 80</h1>

        <button
          onClick={score}
          className="bg-blue-500 p-4 w-1/3 rounded-xl  mt-5 mx-auto"
        >
          Lihat Sertifikat Anda
        </button>
      </div>
      <Footer />
    </div>
  );
}
