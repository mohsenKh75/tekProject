import React, { useState, useEffect } from "react";

import PicsGroup from "./slides/picsGroup";
import Image from "../../components/image/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "../../components/Link/mLink";
import PicsSpecial from "./slides/pics-spesial";
import SlideShow from "./slides/slideShow";
import { ReactComponent as ShopSvg } from "../../components/image/shop.svg";
import { ReactComponent as RegSvg } from "../../components/image/register.svg";
import { ReactComponent as PlastAp } from "../../components/image/plastAp.svg";
import { ReactComponent as MenuSvg } from "../../components/image/menu.svg";
import Google from "../../components/image/Google.svg";
import Apple from "../../components/image/Apple.svg";
import Bazar from "../../components/image/Bazar.svg";
import Etemad from "../../components/image/Etemad.svg";
import KasboKar from "../../components/image/KasboKar.svg";
import Saman from "../../components/image/Saman.svg";
import Logo from "../../logo.svg";
import { Container, Dropdown, Row, Col, Form, Button } from "react-bootstrap";

function MainPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="min-vh-100 bg-main d-flex justify-content-center">
      <Container>
        <Row>
          <Offcanvas placement={"end"} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Image src={Logo} width="4vw" height="5vh" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="max-vh-100 d-flex flex-column justify-content-around align-items-center">
                <div className="side-bar-item">
                  <Link url="/">
                    <a className="side-bar-item">خانه</a>
                  </Link>
                </div>
                <div className="side-bar-item">
                  <Link url="/register">
                    <a className="side-bar-item">ثبت نام</a>
                  </Link>
                </div>
                <div className="side-bar-item">
                  <Link url="/login">
                    <a className="side-bar-item">ورود</a>
                  </Link>
                </div>
                <div className="side-bar-item">
                  <a>تماس با ما</a>
                </div>
                <a className="side-bar-item">تماس با ما</a>
                <a className="side-bar-item">پشتیبانی</a>
                <a className="side-bar-item">قوانین و مقررات</a>
                <a className="side-bar-item">همکاری با ما</a>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={6} className="bg-white mx-auto vw-100">
            <Row dir="ltr" className="d-flex justify-content-around max-vw-100">
              <Col className="p-3 d-flex justify-content-between">
                <div className="mx-20">
                  <Link url="/login">
                    <RegSvg
                      style={{
                        backgroundColor: "#F1F9FD",
                        height: "4vh",
                        width: "3vw",
                      }}
                      className="py-1 rounded-circle"
                    />
                  </Link>
                  <Link url="/register">
                    <small
                      className="d-inline px-2 rounded-pill"
                      style={{
                        color: "black",
                        fontSize: "1vw",
                        backgroundColor: "#F1F9FD",
                      }}
                    >
                      ثبت نام
                    </small>
                  </Link>
                  <ShopSvg
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F1F9FD",
                      height: "4vh",
                      width: "3vw",
                    }}
                    className="py-1 rounded-circle"
                  />
                </div>
              </Col>
              <Col className="p-2 d-flex justify-content-around">
                <div className="flex-grow-2">
                  <PlastAp
                    style={{ height: "5vh", width: "4vw" }}
                    className="rounded-circle"
                  />
                  <Image src={Logo} width="2vw" height="3vh" />
                </div>
                <div>
                  <MenuSvg onClick={handleShow} width="2vw" height="3vh" />
                </div>
              </Col>
            </Row>
            <Row>
              <div className="mobile-search-bar d-flex flex-column justify-content-center align-items-center w-100">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <input
                    style={{ paddingLeft: "70vw" }}
                    dir="rtl"
                    className="mobile-search"
                    type="text"
                  />
                </div>
              </div>
            </Row>
            <Row dir="ltr" className="d-flex justify-content-center max-vw-100">
              <div
                style={{ paddingTop: "30%" }}
                className="background d-flex flex-row-reverse justify-content-center"
              >
                <div
                  style={{ margin: "0.5rem" }}
                  className="bg-light d-flex flex-row-reverse justify-content-between rounded-pill"
                >
                  <Dropdown
                    style={{ width: "auto" }}
                    className="hidden bg-danger rounded-pill"
                  >
                    <Dropdown.Toggle
                      size="sm"
                      style={{
                        margin: "0.5rem",
                        boxShadow: "none",
                        borderBottom: "none",
                      }}
                      className="no-border text-dark bg-danger rounded-pill"
                      id="dropdown-basic"
                    >
                      تهران
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Form.Group className="hidden" controlId="formBasicEmail">
                    <Form.Control
                      style={{ width: "24vw", borderBottom: "none" }}
                      dir="rtl"
                      size="sm"
                      className="rounded-pill p-1 no-border"
                      type="text"
                      placeholder="به دنبال چه فروشگاهی می گردید؟"
                      required
                    />
                  </Form.Group>
                </div>
                <div style={{ margin: "5px" }} className="hidden">
                  <Button style={{ width: "20vw" }} className="rounded-pill">
                    ادامه
                  </Button>
                </div>
              </div>
              <Row className="d-flex justify-content-around">
                <Col className="d-flex justify-content-center">
                  {/* <Slides /> */}
                  <SlideShow></SlideShow>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center max-vw-100">
                <div style={{ marginTop: "2vh", width: "60vw" }}>
                  <Col className="bg-danger d-flex flex-wrap justify-content-center max-vw-100">
                    <PicsGroup />
                  </Col>
                </div>
              </Row>
              <Row className="d-flex flex-row justify-content-center align-items-center">
                <Col className="mobile-baners">
                  <div className="intro-background d-flex flex-column justify-content-between">
                    <small dir="rtl" className="text-main">
                      فروشگاه سندپلاست در استان البرز
                    </small>
                    <div className="rebate1 bg-secondary">
                      <small className="text-main">31% OFF</small>
                    </div>
                    <div className="addInfo bg-primary">
                      <small dir="rtl" className="text-main">
                        فروش ویژه با ضمانت برگشت کالا تا هفت روز
                      </small>
                    </div>
                  </div>
                  <div className="intro-background2 d-flex flex-column justify-content-between">
                    <small dir="rtl" className="text-main">
                      فروش فوق العاده نایلون
                      <br />
                      <small dir="rtl" style={{ fontSize: "0.7rem" }}>
                        طرح لبخند
                      </small>
                    </small>
                    <div className="rebate2 bg-secondary">
                      <small className="text-main">31% OFF</small>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <div style={{ width: "60vw" }}>
                  <Col className="bg-danger d-flex flex-wrap justify-content-center max-vw-100">
                    <PicsGroup />
                  </Col>
                </div>
              </Row>
              <Row className="d-flex justify-content-center align-items-center my-4">
                <h6 dir="rtl" className="text-center">
                  پیشنهاد ویژه
                </h6>
                <div
                  style={{ width: "58vw" }}
                  className="d-flex flex-row justify-content-center align-items-center bg-secondary"
                >
                  <PicsSpecial />
                </div>
              </Row>
              <Row className="d-flex justify-content-center align-items-center my-4">
                <div
                  style={{ width: "58vw" }}
                  className="d-flex flex-row justify-content-between align-items-center bg-primary above-footer"
                >
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <div className="dots d-flex justify-content-center align-items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-start align-items-center">
                      <div className="brands">
                        <Image
                          width="10vw"
                          height="auto"
                          className="brands"
                          src={Google}
                          alt="avsf"
                        />
                      </div>
                      <div className="brands">
                        <Image
                          width="10vw"
                          height="auto"
                          className="brands"
                          src={Apple}
                          alt="avsf"
                        />
                      </div>
                      <div className="brands">
                        <Image
                          width="10vw"
                          height="auto"
                          className="brands"
                          src={Bazar}
                          alt="avsf"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p className="app-download text-light mx-3 my-1">
                      دانلود اپلیکیشن
                    </p>
                    <div className="dots d-flex justify-content-center align-items-center my-1">
                      <Image src={Logo} width="1vw" height="3vh" />
                    </div>
                  </div>
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="bg-primary mx-auto vw-100">
            <footer className="d-flex flex-column justify-content-center flex-column align-items-center">
              <div dir="ltr" className="d-flex flex-row justify-content-center">
                <a className="footer-styles">نمایندگی</a>
                <a className="footer-styles">تماس با ما</a>
                <a className="footer-styles">پشتیبانی</a>
                <a className="footer-styles">قوانین و مقررات</a>
                <a className="footer-styles">همکاری با ما</a>
              </div>
              <div
                dir="ltr"
                className="my-5 d-flex flex-row justify-content-between"
              >
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center">
                    <box-icon
                      className="pointer"
                      name="facebook-circle"
                      type="logo"
                      color="#fbfbfb"
                    ></box-icon>
                    <box-icon
                      className="pointer"
                      name="instagram"
                      type="logo"
                      color="#fbfbfb"
                    ></box-icon>
                    <box-icon
                      className="pointer"
                      name="telegram"
                      type="logo"
                      color="#fbfbfb"
                    ></box-icon>
                    <box-icon
                      className="pointer"
                      name="twitter"
                      type="logo"
                      color="#fbfbfb"
                    ></box-icon>
                  </div>
                  <small className="text-light" style={{ fontSize: "0.6rem" }}>
                    .ما را در شبکه های اجتماعی دنبال کنید
                  </small>
                </div>
                <div className="d-flex flex-wrap flex-row">
                  <div className="conection-number py-7 d-flex flex-column justify-content-center align-items-center">
                    <p className="my-0 text-primary">021 - 34221</p>
                    <small
                      className="text-primary mb-1"
                      style={{ fontSize: "0.6rem" }}
                    >
                      پشتیبانی 24 ساعته
                    </small>
                  </div>
                  <box-icon
                    name="headphone"
                    animation="tada"
                    color="#ffffff"
                  ></box-icon>
                </div>
                <div className="namad">
                  <Image src={Etemad} alt="تجارت الکترونیک" />
                </div>
                <div className="namad">
                  <Image src={KasboKar} alt="کسب و کار مجازی" />
                </div>
                <div className="namad">
                  <Image src={Saman} alt="بانک سامان" />
                </div>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
