import React from "react";
import Stars from "./stars";
import { ReactComponent as Pic } from "../../../components/image/pics/picItem.svg";
import { ReactComponent as Pic2 } from "../../../components/image/pics/01.svg";
import { ReactComponent as Pic3 } from "../../../components/image/pics/03.svg";

function PicsSpecial() {
  return (
    <div className="d-flex overflow-auto w-100">
      <div
        style={{ width: "200px" }}
        className="flex-shrink-0 flex-grow-1 bg-light mx-1 my-2 flex-column d-flex justify-content-center align-items-between rounded py-4 py-4"
      >
        <div className="imagePart d-flex flex-column justify-content-center align-items-center position-relative">
          <Pic style={{ width: "100px", height: "100px" }} />
          <Stars size="20px" fillColor="#009BE1" />

          <div className="position-absolute start-0">
            <div className="d-flex flex-column justiy-content-center bg-secondary rebate3">
              <span className="text-main">31% OFF</span>
            </div>
            <div className="d-flex flex-column justiy-content-center bg-primary deadline1">
              <span className="text-main">فقط تا خرداد</span>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", backgroundColor: "#F1F9FD" }}
          dir="rtl"
          className="d-flex flex-column justify-content-center align-items-center mx-auto py-5 px-3 px-3"
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

      <div
        style={{ width: "200px" }}
        className="flex-shrink-0 flex-grow-1 bg-light mx-1 my-2 flex-column d-flex justify-content-center align-items-between rounded py-4"
      >
        <div className="imagePart d-flex flex-column justify-content-center align-items-center position-relative">
          <Pic2 style={{ width: "100px", height: "100px" }} />
          <Stars size="20px" fillColor="#009BE1" />

          <div className="position-absolute start-0">
            <div className="d-flex flex-column justiy-content-center bg-secondary rebate3">
              <span className="text-main">31% OFF</span>
            </div>
            <div className="d-flex flex-column justiy-content-center bg-primary deadline1">
              <span className="text-main">فقط تا خرداد</span>
            </div>
          </div>
        </div>

        <div
          style={{ width: "100%", backgroundColor: "#F1F9FD" }}
          dir="rtl"
          className="d-flex flex-column justify-content-center align-items-center mx-auto py-5 px-3"
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
      <div
        style={{ width: "200px" }}
        className="flex-shrink-0 flex-grow-1 bg-light mx-2 my-2 flex-column d-flex justify-content-center align-items-center rounded py-2"
      >
        <div className="imagePart d-flex flex-column justify-content-center align-items-center">
          <Pic3 style={{ width: "100px", height: "100px" }} />
        </div>
      </div>
    </div>
  );
}

export default PicsSpecial;
