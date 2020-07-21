import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Router } from "@reach/router";
import Home from "../Home";
import GithubProfile from "../GithubProfile";
import "antd/dist/antd.css";
import { Button } from "antd";
import Cars from "../Cars";
import Login from "../auth/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Container className="text-center mt-5">
      <h1 className=" text-white m-5">Mekvahan</h1>

      <Row>
        <Col xs={12} md={3}>
          <Button type="primary" className="ml-5 mb-2" size="large">
            <Link to="githubprofile" className="p-2 text-white">
              Search for github profile
            </Link>
          </Button>
        </Col>
        <Col xs={12} md={3}>
          <Button type="primary" size="large" className="mb-2">
            <Link to="/login" className="p-2 text-white">
              Login
            </Link>
          </Button>
        </Col>
        <Col xs={12} md={3}>
          <Button type="primary" size="large" className="mb-2">
            <Link to="/" className="p-2 text-white">
              Home
            </Link>
          </Button>
        </Col>

        <Col xs={12} md={3}>
          <Button type="primary" className="ml-5 mb-2" size="large">
            <Link to="getcarsinfo" className="p-2 text-white">
              Search Vechiles here
            </Link>
          </Button>
        </Col>
      </Row>

      <Router>
        <Home path="/" />
        <GithubProfile path="githubprofile" />
        <Cars path="getcarsinfo" />
        <Login path="login" />
      </Router>
    </Container>
  );
}

export default App;

//         <Row>
//         <Col xs={12} md={8}>
//           Get gihub profiles
//         </Col>
//         <Col xs={6} md={4}>
//           Get gihub profiles
//         </Col>
//       </Row>
