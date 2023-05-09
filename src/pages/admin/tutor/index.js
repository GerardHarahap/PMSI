import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    getTutor();
  }, []);

  const getTutor = async () => {
    const response = await axios.get("http://localhost:5000/tutor");
    setTutor(response.data);
    console.log(response);
  };

  const deleteTutor = async (tutorId) => {
    try {
      await axios.delete(`http://localhost:5000/tutor/${tutorId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="container mx-auto font-sans pt-12 px-11">
          <div>
            <h1 className="font-semibold text-6xl text-[#1B1B1B]">Our Tutor</h1>
            <p className="font-medium font-xl text-[#8B93A2]">
              {" "}
              Edutama works with dozens of mentors with expertise and experience
              in their fields
            </p>
            <Link href="/addtutor">
              <button className="bg-green-600 text-white font-sans border rounded-xl w-28 h-12 mt-5 font-semibold text-xl">
                add
              </button>
            </Link>
          </div>
          <div className="mx-auto container mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-10">
            {tutor.map((x) => (
              <div
                className="border rounded-xl shadow-xl shadow-gray-200 mx-auto px-4  flex justify-center  flex-col mb-10 sm:mb-0"
                key={x.id}
              >
                <Image
                  alt="foto"
                  src={x.url}
                  width={250}
                  height={250}
                  className="mx-auto"
                  unoptimized
                />

                <p className="text-[#1B1D1F] text-xl text-center mt-4">
                  {x.name}
                </p>
                <p className="text-[#8B93A2] text-center mb-5">{x.roles}</p>
                <div className="flex justify-between p-5 font-sans font-semibold text-xl">
                  <button
                    onClick={deleteTutor}
                    className="bg-red-600 text-white  font-sans border rounded-xl w-24 h-12 mt-2 "
                  >
                    Delete
                  </button>
                  <button className="bg-green-600 text-white  font-sans border rounded-xl w-24 h-12 mt-2 ">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
      {/* {tutor.map((tutor)=>())} */}
    </>
  );
}
