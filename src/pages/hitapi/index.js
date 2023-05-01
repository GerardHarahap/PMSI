import React, { useState, useEffect } from "react";
import axios from "axios";

export default function index() {
  const [post, setPost] = useState([]);

  //   axios.get("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    axios
      .get("http://localhost:5000/me")
      .then(async (res) => {
        const response = await res;

        setPost(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Client Side Data Fetching</h1>

      {post.map((x) => {
        return (
          <div>
            {/* <div>{x.name}</div>
            <div>{x.price}</div> */}
          </div>
        );
      })}
    </>
  );
}
