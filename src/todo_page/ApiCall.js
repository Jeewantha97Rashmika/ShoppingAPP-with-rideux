import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function ApiCall() {
  const [post, setPost] = useState([]);

  const ApiUrl =
    "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
     await fetch(ApiUrl)
        .then((res) => res.json())
        .then((res) => {
          setPost(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Post List</h2>
      {post.map((val, key) => {
        return <Card key={key} val={val} />;
      })}
    </div>
  );
}
