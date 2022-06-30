import React from "react";
import { Button } from "react-bootstrap";
import Link from "../../components/Link/mLink";

function Home() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <Link url="/login">
          <Button variant="primary" type="submit" size="lg" className="ms-3 text-light px-4">
            ورود
          </Button>
        </Link>
      </div>
      <div>
        <Link url="/register">
          <Button variant="primary" type="submit" size="lg" className='text-light'>
            ثبت‌نام
          </Button>
        </Link>
      </div>
      <div>
        <Link url="/passwordField">
          <Button variant="primary" type="submit" size="lg" className='text-light mx-3 px-2'>
            کد عبور
          </Button>
        </Link>
      </div>
      <div>
        <Link url="/mainpage">
          <Button variant="primary" type="submit" size="lg" className='text-light mx-3 px-2'>
            صفحه اصلی
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
