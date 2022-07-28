import React, { useEffect, useState } from "react";

export default function Details(props) {
  const postId = props.match.params.id;
  console.log(postId);

  const [post, setPost] = useState([]);
  console.log(post.title);
  const ApiUrl = "https://fakestoreapi.com/products/{postId}";
  console.log(ApiUrl);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products/" + postId)
        .then((res) => res.json())

        .then((res) => {
          setPost(res);
          console.log(res);
        })
        .catch((error) => {
          console.log("Error is " + error);
        });
    }

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "80%",

        borderRadius: "20px",
        margin: 20,
        padding: 10,

        display: "flex",
        flexDirection: "column",
        left: "10% auto",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <img
            style={{ borderRadius: "20px", width: "85%", height: "85%" }}
            src={post.image}
          />
        </div>
        <div>
          <h4 style={{ color: "black" }}>Name of Product : {post.title}</h4>
          <p style={{ color: "black" }}> Price : {post.price}</p>
        </div>
      </div>
    </div>
  );
}
