import React, { useState, useEffect } from "react";

export default function index() {
  const [pilihan, setPilihan] = useState();
  const [pilih, setPili] = useState();
  const [mili, setMilih] = useState();
  const [jumlah, setJumlah] = useState();

  const abc = (e) => {
    setPilihan(e.target.value);
  };
  const def = (e) => {
    setPili(e.target.value);
  };
  const ghi = (e) => {
    setMilih(e.target.value);
  };
  const add = (e) => {
    setJumlah(...e.target.value);
  };
  let cec = () => {
    if (pilihan[0] == 20) {
      console.log("hore");
    }
  };
  return (
    <>
      {cec}
      <div>
        console.log(pilihan+pilih+mili)
        <h1>{pilihan}</h1>
        <form>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="1"
            onChange={abc}
          />
          <label htmmlfor="html">HTML</label>
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="0"
            onChange={abc}
          />
          <label htmmlfor="css">CSS</label>

          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="0"
            onChange={abc}
          />
          <label htmmlfor="javascript">JavaScript</label>
        </form>
        <h1>{pilih}</h1>
        <form>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="1"
            onChange={def}
          />
          <label htmmlfor="html">HTML</label>
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="0"
            onChange={def}
          />
          <label htmmlfor="css">CSS</label>

          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="0"
            onChange={def}
          />
          <label htmmlfor="javascript">JavaScript</label>
        </form>
        <h1>{mili}</h1>
        <form>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="1"
            onChange={ghi}
          />
          <label htmmlfor="html">HTML</label>
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="0"
            onChange={ghi}
          />
          <label htmmlfor="css">CSS</label>

          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="0"
            onChange={ghi}
          />
          <label htmmlfor="javascript">JavaScript</label>
        </form>
        <h1>_total</h1>
        <h1>{cec}</h1>
      </div>
    </>
  );
}
