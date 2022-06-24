import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "../../logo.svg";

function Register() {
  return (
    <div className="min-vh-100 py-3 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row >
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="100px" width="100px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form>
                <h3>ثبت‌نام</h3>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark"
                    type="text"
                    placeholder="شماره موبایل"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-2 pe-5 border border-dark"
                    type="text"
                    placeholder="ایمیل"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    size="lg"
                    className="radius-4 p-3 pe-5 border border-dark"
                    type="password"
                    placeholder="رمز ورود"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mt-3">
                  <Form.Check type="radio" label="فروشگاه دارم" />
                  <Form.Check type="radio" label="مشتری هستم" />
                </div>

                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill w-100 text-light"
                  >
                   ثبت‌نام
                  </Button>
                </Col>
              </Form>
            </div>
            <p className="my-4 mx-2 text-center">
              ورود شما به معنای پذیرش شرایط <Link url="/" title="پلاست اپ" /> و
              قوانین <Link url="/" title="حریم خصوصی" /> است.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
