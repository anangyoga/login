import React, { useState } from "react";
import { Col, Row } from "antd";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });

    if (res.username === undefined) {
      alert("Login Failed");
    } else {
      navigate("/profile");
    }
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
