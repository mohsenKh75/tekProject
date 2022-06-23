import React from "react";
import { Button } from "react-bootstrap";
import Link from "../../components/Link";

function Home() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <Link url="/login">
          <Button variant="primary" type="submit" size="lg" className="ms-3">
            ورود
          </Button>
        </Link>
      </div>
      <div>
        <Link url="/register">
          <Button variant="primary" type="submit" size="lg">
            ثبت‌نام
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
