import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function TodoPage() {
    const [text, setText] = useState();
  const  lenghtOfText = text ? text.length:0;

  const handleChange = (event) => {
    console.log(event.target.value);
    return setText(event.target.value);
  };

  const uperhadlerOnclik = () => {
    console.log(text.toUpperCase());
    return setText(text.toUpperCase());
  };
  const lowerhadlerOnclik = () => {
    console.log(text.toLowerCase());
    return setText(text.toLowerCase());
  };
  const resethadlerOnclik = () => {
    
    return setText("") ;
  };

  return (
    <div>
    <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>My Todo App</h1>
        <textarea
          placeholder="Enter you "
          value={text}
          onChange={handleChange}
          style={{
            border: "3px solid black",
            padding: 30,
            margin: 10,
            minWidth: "150vh",
            height: "20rem",
            fontSize: "calc(10px + 2vmin)",
          }}
        />
      </div>
      <div style={{ marginLeft: 210, marginRight: 210 }}>
        <h2>{text}</h2>
        <hr />
        <div style={{ display: "flex", margin: 10, padding: 10 }}>
          <Button
            onClick={uperhadlerOnclik}
            style={{ marginRight: 10 }}
            variant="contained"
          >
            UPPERCASE
          </Button>
          <Button
           onClick={lowerhadlerOnclik}
            style={{ marginRight: 10 }}
            variant="contained"
            color="secondary"
          >
            Lowercase
          </Button>
          <Button
           onClick={resethadlerOnclik}
            style={{ marginRight: 10 }}
            variant="contained"
            color="primary"
          >
            reset
          </Button>
        </div>
        <div>
          <p>Length of Caracters :{lenghtOfText}</p>
        </div>
      </div>
      </div>
  );
}
