import React, { useState } from "react";
import { Col, Row } from "antd";
import Login from "../components/Login";

const STYLES = {
  homepage: {
    background: "#BCEAD5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "#150050",
  },
  loginForm: {
    background: "#DEF5E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const HomeLayout = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row gutter={16} justify="center" align="center">
      <Col flex span={12} style={STYLES.homepage}>
        <h1>Welcome to Our Homepage</h1>
      </Col>
      <Col span={12} style={STYLES.loginForm}>
        <Login onFinish={onFinish} onFinishFailed={onFinishFailed} user={user} setUser={setUser} password={password} setPassword={setPassword} />
      </Col>
    </Row>
  );
};

export default HomeLayout;
