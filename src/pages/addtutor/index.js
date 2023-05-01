import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Link from "next/link";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState("");
  const [schedule, setSchedule] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("roles", roles);
    formData.append("schedule", schedule);
    formData.append("email", email);
    formData.append("Number", Number);
    formData.append("desc", desc);
    try {
      await axios.post("http://localhost:5000/tutor", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white w-screen h-screen mb- flex pt-10 pl-10 container">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Nama Tutor</label>
            <div className="control border rounded-lg border-black w-2/5">
              <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Tutor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Roles Tutor</label>
            <div className="control">
              <input type="text" className="input" value={roles} onChange={(e) => setRoles(e.target.value)} placeholder="Roles Tutor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Jadwal Tutor</label>
            <div className="control">
              <input type="text" className="input" value={schedule} onChange={(e) => setSchedule(e.target.value)} placeholder="Jadwal Tutor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Tutor</label>
            <div className="control">
              <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Tutor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor Tutor</label>
            <div className="control">
              <input type="text" className="input" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Nomor Tutor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Deskripsi Tutor</label>
            <div className="control">
              <input type="text" className="input" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Deskripsi Tutor" />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input type="file" className="file-input" onChange={loadImage} />
                  <span className="file-cta"></span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success bg-green-600 text-white font-sans border rounded-xl w-24 h-12 mt-5 font-semibold text-l">
                Save
              </button>
              <Link href="/tutor">
                <button type="submit" className="button is-success bg-red-600 text-white font-sans border rounded-xl w-24 h-12 mt-5 font-semibold text-l">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default AddProduct;
