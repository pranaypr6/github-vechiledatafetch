import React, { useReducer } from "react";
import { Form, Input, Button } from "antd";
import { navigate } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const initialState = {
  email: " ",
  password: " ",
  error: false,
  loading: false,
  isLoggedIn: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "login":
      return {
        ...state,
        error: false,
        loading: true,
      };
    case "success":
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: "Please enter valid details",
      };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, error, isLoggedIn, loading } = state;

  if (isLoggedIn) {
    navigate("/");
  }
  const onLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    if (email === "pranay" && password === "pranay") {
      dispatch({ type: "success" });
    } else {
      dispatch({ type: "error" });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: "8", offset: "2" }} className="login">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onSubmit={onLogin}
            style={{ width: "500px" }}
          >
            {error && <h1 classname="text-white">Error</h1>}
            {loading && <h1 classname="text-white">Loading...</h1>}
            <Form.Item label="Username" name="email">
              <Input
                value={email}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "password",
                    value: e.target.value,
                  })
                }
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={onLogin}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
