import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/Admin";

const STYLES = {
  invalid: {
    color: "#FB2576",
  },
};

const Login = () => {
  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await LoginService.loginWithEmail(payload);
      localStorage.setItem("token", response?.data?.token);
      console.log(response?.data?.email, "data");
      console.log(response?.data?.token, "token");
      setInvalid(false);
      navigate("/profile");
    } catch (error) {
      setInvalid(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {invalid && <p style={STYLES.invalid}>Wrong password or username</p>}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
