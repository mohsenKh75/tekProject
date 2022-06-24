import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "../../components/image/image";
import Link from "../../components/Link/mLink";
import Logo from "../../logo.svg";

function Login() {
  return (
    <div className="min-vh-100 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={10} md={8} lg={5} className="bg-white mx-auto rounded">
            <div className="d-flex justify-content-center">
              <Image height="100px" width="100px" src={Logo} />
            </div>

            <div className="mx-5">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h3>ورود</h3>
                  <Form.Control
                    size="lg"
                    className="my-4 radius-4 p-3 pe-5 border border-dark text-right"
                    type="text"
                    placeholder="شماره موبایل"
                  />
                  <Form.Control
                    size="lg"
                    className="radius-4 p-3 pe-5 border border-dark text-right"
                    type="password"
                    placeholder="رمز ورود"
                  />
                </Form.Group>

                <Col xs={10} md={8} lg={5} className="mx-auto mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill w-100 text-light"
                  >
                    ورود
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

export default Login;
