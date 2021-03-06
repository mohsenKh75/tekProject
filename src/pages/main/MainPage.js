import React, { useState } from "react";
import PicsGroup from "./slides/picsGroup";
import Image from "../../components/image/image";
import {
    Offcanvas,
    Container,
    Dropdown,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";
import Link from "../../components/Link/mLink";
import PicsSpecial from "./slides/pics-spesial";
import SlideShow from "./slides/slideShow";
import ShopSvg from "../../components/image/shop.svg";
import RegSvg from "../../components/image/register.svg";
import PlastAp from "../../components/image/plastAp.svg";
import MenuSvg from "../../components/image/menu.svg";
import Google from "../../components/image/Google.svg";
import Apple from "../../components/image/Apple.svg";
import Bazar from "../../components/image/Bazar.svg";
import Etemad from "../../components/image/Etemad.svg";
import KasboKar from "../../components/image/KasboKar.svg";
import Saman from "../../components/image/Saman.svg";
import Logo from "../../logo.svg";
import { MobileView, BrowserView, isMobile } from "react-device-detect";

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
                                {/* Don't use vw Koskesh! :)))) */}
                                <div className="menu-logo">
                                    <Image src={Logo} width="4vw" height="5vh" />
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="menu-items">
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ????????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/register">
                                        <h6 className="mobile-font-size" href="#">
                                            ?????? ??????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/login">
                                        <h6 className="mobile-font-size" href="#">
                                            ????????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ???????? ???? ????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ???????? ???? ????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ????????????????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ???????????? ?? ????????????
                                        </h6>
                                    </Link>
                                </div>
                                <div className="side-bar-item">
                                    <Link url="/">
                                        <h6 className="mobile-font-size" href="#">
                                            ???????????? ???? ????
                                        </h6>
                                    </Link>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Col lg={6} className="bg-white mx-auto vw-100">
                        <Row className="d-flex  flex-row-reverse justify-content-between max-vw-100">
                            <Col className="p-3 d-flex justify-content-end">
                                <div className="d-flex align-items-center mx-20">
                                    <Link url="/login">
                                        <div
                                            className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                backgroundColor: "#F1F9FD",
                                                height: "50px",
                                                width: "50px",
                                            }}
                                        >
                                            <Image src={RegSvg} width="25px" height="25px" />
                                        </div>
                                    </Link>
                                    <Link url="/register">
                                        <span
                                            className="p-3 rounded-3 ms-4 text-nowrap"
                                            style={{
                                                color: "black",
                                                backgroundColor: "#F1F9FD",
                                                fontSize: "14px",
                                            }}
                                        >
                                            ?????? ??????
                                        </span>
                                    </Link>

                                    <div
                                        className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            backgroundColor: "#F1F9FD",
                                            height: "50px",
                                            width: "50px",
                                        }}
                                    >
                                        <Image src={ShopSvg} width="25px" height="25px" />
                                    </div>
                                </div>
                            </Col>
                            <Col className="p-2 d-flex align-items-center">
                                <div>
                                    <Image
                                        src={MenuSvg}
                                        width="20px"
                                        onClick={handleShow}
                                        className="pointer"
                                    />
                                </div>

                                <div className="d-flex align-items-center me-5">
                                    <Image src={Logo} width="20px" />

                                    <Image
                                        src={PlastAp}
                                        width="80px"
                                        height="auto"
                                        className="me-3"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <MobileView>
                            <div className="mobile-search-bar d-flex flex-column justify-content-center align-items-center w-100 px-3">
                                <input className="mobile-search w-100" type="text" />
                            </div>
                        </MobileView>
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
                                            ??????????
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
                                            placeholder="???? ?????????? ???? ???????????????? ???? ????????????"
                                            required
                                        />
                                    </Form.Group>
                                </div>
                                <div style={{ margin: "5px" }} className="hidden">
                                    <Button
                                        style={{ width: "20vw", height: "6vh" }}
                                        className="rounded-pill"
                                    >
                                        ??????????
                                    </Button>
                                </div>
                            </div>
                            <Row className="d-flex justify-content-around">
                                <Col className="d-flex justify-content-center my-3">
                                    {/* <Slides /> */}
                                    <SlideShow></SlideShow>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center max-vw-100">
                                <div style={{ marginTop: "30px" }} className="my-5">
                                    <Col className="bg-danger d-flex flex-wrap justify-content-center max-vw-100">
                                        <PicsGroup />
                                    </Col>
                                </div>
                            </Row>
                            <Row className="d-flex flex-row justify-content-center align-items-center">
                                <Col className="mobile-baners">
                                    <div className="intro-background d-flex flex-column justify-content-between w-100">
                                        <small dir="rtl" className="text-main">
                                            ?????????????? ???????????????? ???? ?????????? ??????????
                                        </small>
                                        <div className="rebate1 bg-secondary">
                                            <small className="text-main">31% OFF</small>
                                        </div>
                                        <div className="addInfo bg-primary">
                                            <small dir="rtl" className="text-main">
                                                ???????? ???????? ???? ?????????? ?????????? ???????? ???? ?????? ??????
                                            </small>
                                        </div>
                                    </div>
                                    <div className="intro-background2 d-flex flex-column justify-content-between w-100">
                                        <small dir="rtl" className="text-main">
                                            ???????? ?????? ???????????? ????????????
                                            <br />
                                            <small dir="rtl" style={{ fontSize: "0.7rem" }}>
                                                ?????? ??????????
                                            </small>
                                        </small>
                                        <div className="rebate2 bg-secondary">
                                            <small className="text-main">31% OFF</small>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <div>
                                    <Col className="bg-danger d-flex flex-wrap justify-content-center max-vw-100">
                                        <PicsGroup />
                                    </Col>
                                </div>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center my-4">
                                <h6 dir="rtl" className="text-center">
                                    ?????????????? ????????
                                </h6>
                                <div className="d-flex flex-row justify-content-center align-items-center bg-secondary">
                                    <PicsSpecial />
                                </div>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center my-4">
                                <div className="d-flex justify-content-between align-items-center bg-primary above-footer">
                                    <div className="d-flex flex-row justify-content-start align-items-center">
                                        <div className="dots d-flex justify-content-center align-items-center p-3">
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
                                        <BrowserView className="d-flex flex-row flex-wrap justify-content-start align-items-center">
                                            <div className="brands">
                                                <Image
                                                    width="100px"
                                                    height="auto"
                                                    className="brands"
                                                    src={Google}
                                                    alt="avsf"
                                                />
                                            </div>
                                            <div className="brands">
                                                <Image
                                                    width="100px"
                                                    height="auto"
                                                    className="brands"
                                                    src={Apple}
                                                    alt="avsf"
                                                />
                                            </div>
                                            <div className="brands">
                                                <Image
                                                    width="100px"
                                                    height="auto"
                                                    className="brands"
                                                    src={Bazar}
                                                    alt="avsf"
                                                />
                                            </div>
                                        </BrowserView>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-around">
                                        <p className="app-download text-light text-nowrap mx-3 my-1">
                                            ???????????? ????????????????
                                        </p>
                                        <div className="dots d-flex justify-content-center align-items-center my-1 p-3">
                                            <Image src={Logo} width="20px" height="20px" />
                                        </div>
                                    </div>
                                </div>
                            </Row>

                            <MobileView className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                                <div className="brands">
                                    <Image
                                        width="100px"
                                        height="auto"
                                        className="brands"
                                        src={Google}
                                        alt="avsf"
                                    />
                                </div>
                                <div className="brands">
                                    <Image
                                        width="100px"
                                        height="auto"
                                        className="brands"
                                        src={Apple}
                                        alt="avsf"
                                    />
                                </div>
                                <div className="brands">
                                    <Image
                                        width="100px"
                                        height="auto"
                                        className="brands"
                                        src={Bazar}
                                        alt="avsf"
                                    />
                                </div>
                            </MobileView>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="bg-primary mx-auto vw-100">
                        <footer className="d-flex flex-column justify-content-center flex-column align-items-center">
                            <div className="d-flex flex-row-reverse justify-content-center flex-wrap">
                                <a className="footer-styles px-3 flex-shrink-0">????????????????</a>
                                <a className="footer-styles px-3 flex-shrink-0">???????? ???? ????</a>
                                <a className="footer-styles px-3 flex-shrink-0">????????????????</a>
                                <a className="footer-styles px-3 flex-shrink-0">
                                    ???????????? ?? ????????????
                                </a>
                                <a className="footer-styles px-3 flex-shrink-0">???????????? ???? ????</a>
                            </div>
                            <div className="my-5 d-lg-flex">
                                <div className="d-flex justify-content-between">
                                    <div className="namad py-2">
                                        <Image src={Etemad} alt="?????????? ??????????????????" />
                                    </div>
                                    <div className="namad py-2">
                                        <Image src={KasboKar} alt="?????? ?? ?????? ??????????" />
                                    </div>
                                    <div className="namad py-2">
                                        <Image src={Saman} alt="???????? ??????????" />
                                    </div>
                                </div>

                                <div
                                    className={`d-flex justify-content-between ${!isMobile && "flex-row-reverse"
                                        }`}
                                >
                                    <div className="my-4">
                                        <div className="d-flex justify-content-center">
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
                                        <p className="text-light text-center">
                                            ???? ???? ???? ???????? ?????? ?????????????? ?????????? ????????.
                                        </p>
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mx-4">
                                        <box-icon
                                            name="headphone"
                                            animation="tada"
                                            color="#ffffff"
                                        ></box-icon>
                                        <div className="conection-number p-3 d-flex flex-column justify-content-center align-items-center">
                                            <p className="my-0 text-primary">021 - 34221</p>
                                            <small className="text-primary mb-1">
                                                ???????????????? 24 ??????????
                                            </small>
                                        </div>
                                    </div>
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
