import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Card({ val }) {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "80%",
        height: "18rem",
        borderRadius: "20px",
        margin: 20,
        padding: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <img
            style={{ borderRadius: "20px", width: "65%", height: "15rem" }}
            src={val.image}
          />
        </div>
        <div>
          <h4 style={{ color: "black" }}>Name of Product : {val.title}</h4>
          <p style={{ color: "black" }}> Price : {val.price}</p>

          <Link to={"/Details/" + val.id }>
         
            {" "}
            <Button
              // onClick={() => history.push('/Details/${val.id}')}

              style={{ marginRight: 10 }}
              variant="contained"
              color="secondary"
              id={val.id}
            >
              {" "}
              Start
            </Button>{" "}
           
          </Link>
        </div>
      </div>
    </div>
  );
}
