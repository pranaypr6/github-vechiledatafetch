import React from "react";
import { Row, Col } from "react-bootstrap";
import { navigate, Redirect } from "@reach/router";

function Home() {
  return (
    <div className="text-center pt-5 ">
      <Row className="home" style={{ border: "1px solid #fff", height: "100" }}>
        <Col lg={12}>
          <h3 className=" text-white  pt-5">Welcome to mekvahan!</h3>
          <h1 className=" text-white">Home</h1>

          <ul className=" text-white">
            <li>
              GET DETAILS OF ANY VECHILE WITH VEHICLE IDENTIFICATION NUMBER{" "}
            </li>
            <li>FETCH GITHUB PROFILES </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
