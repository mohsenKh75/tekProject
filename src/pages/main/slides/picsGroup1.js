import React from "react";
import Stars from "./stars";
import { ReactComponent as Pic } from "../../../components/image/pics/picItem.svg";

function PicsGroup1({ className }) {
  return (
    <div
      style={{ width: "200px" }}
      className={`bg-light mx-2 my-2 flex-column d-flex justify-content-center align-items-center rounded ${className}`}
    >
      <div className="imagePart d-flex flex-column justify-content-center align-items-center">
        <Pic style={{ width: "17vw", height: "22vh" }} />
        <Stars size="2vw" fillColor="#009BE1" />
      </div>
      <div
        style={{ backgroundColor: "#f7f7f7" }}
        dir="rtl"
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <h5>نایلون طرح لبخند</h5>
        <small
          style={{ textAlign: "center", fontSize: "12px" }}
          className="text-dark"
        >
          موجود در انبار پلاست اپ{" "}
        </small>
        <small
          style={{ textAlign: "center", fontSize: "12px" }}
          className="text-dark"
        >
          <span className="text-secondary">10000</span> تومان - &nbsp;
          <span className="text-secondary">210000</span> تومان
        </small>
      </div>
    </div>
  );
}

export default PicsGroup1;
