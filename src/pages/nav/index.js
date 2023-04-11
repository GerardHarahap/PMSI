import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 pt-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src="/logo 1.png" width={150} height={28} alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/closed.svg"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={30}
                      height={30}
                      alt="open"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex md:mt-3">
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Program
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE] border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Tutors
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Message Box
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6  text-[#C1C1C1] py-2 md:px-3 text-center  border-b-2 md:border-b-0  hover:bg-[#0084FE]  border-[#0084FE]  md:hover:text-[#0084FE] md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Contact Person
                  </Link>
                </li>
              </ul>

              <ul className="h-screen md:h-auto items-center justify-center md:flex md:mt-3"></ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
