import React, { useState } from "react";
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
  const score = (e) => {
    e.preventDefault();
    router.push("/sertif");
  };

  const answers = useState([{}]);

  return (
    <div className="bg-white font-sans">
      <Navbar />
      <h1 className="font-semibold text-5xl p-5 ml-5 mt-14">
        Creative Front-End Design <br />& Code Website
      </h1>
      <div className="container pl-5 flex mt-14 justify-around">
        <div className="w-4/6">
          <form>
            <p className="font-semibold text-[36px]">What is HTML?</p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Hyper Text Markup Language
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                High Text Markup Language
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Hyper Type Markup Language
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                High Type Markup Language
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">What is CSS?</p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Cascading Style Sheets
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Cascading Style Sheets
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Categorized Style Sheets
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                Categorized Style Syntax
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              What is the function of the '&#60;head&#62;' tag in HTML?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display the main content of an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display the header of an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display an image in an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                To display important information related to HTML documents
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              What is responsive web design?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Web design that is responsive to mobile devices
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Web design that is responsive to desktop devices
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Web design that is not responsive to mobile devices
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                Unresponsive web design to desktop devices
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              What is the function of the '&#60;img&#62;' tag in HTML?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display text in an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display an image in an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                To display the video in an HTML document
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                To display the header of an HTML document
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              Apa yang dimaksud dengan JavaScript?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Bahasa pemrograman untuk network engineer
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Bahasa pemrograman untuk backend development
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Bahasa pemrograman untuk database administrator
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                Bahasa pemrograman untuk frontend development
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              Apa yang dimaksud dengan Bootstrap?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Framework JavaScript untuk backend development
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Framework CSS untuk frontend development
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Framework untuk database administrator
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                Framework untuk network engineer
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              Apa perbedaan antara margin dan padding?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Margin adalah jarak antara border dengan content sedangkan
                padding adalah jarak antara border dengan elemen berikutnya
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Margin adalah jarak antara elemen dengan elemen lainnya
                sedangkan padding adalah jarak antara border dengan content
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Margin adalah jarak antara elemen dengan content sedangkan
                padding adalah jarak antara border dengan elemen itu sendiri
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                None of the above
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              Apa perbedaan antara ID dan class pada CSS?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                ID hanya bisa digunakan satu kali sedangkan class bisa digunakan
                berkali-kali
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                ID bisa digunakan berkali-kali sedangkan class hanya bisa
                digunakan satu kali
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                ID dan class sama-sama bisa digunakan berkali-kali
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                None of the above
              </label>
            </div>
          </form>

          <form>
            <p className="font-semibold text-[36px] mt-10">
              Apa perbedaan antara inline dan block pada CSS?
            </p>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Inline hanya bisa digunakan pada teks sedangkan block bisa
                digunakan pada semua elemen
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Inline hanya bisa digunakan pada gambar sedangkan block bisa
                digunakan pada semua elemen
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt-3"
              >
                Inline hanya bisa digunakan pada teks dan gambar sedangkan block
                hanya bisa digunakan pada kontainer
              </label>
            </div>
            <div className="border rounded-xl w-3/4 p-3 mt-3">
              <input type="radio" id="html" name="fav_language" value="1" />
              <label
                htmmlfor="html"
                className="text-center ml-10 text-[18px] mt3"
              >
                None of the above
              </label>
            </div>
          </form>
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

      <button
        className="bg-blue-500 p-4 w-1/3 rounded-xl ml-14 mt-5"
        onClick={score}
      >
        Done
      </button>

      <Footer />
    </div>
  );
}
