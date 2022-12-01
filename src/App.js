import "antd/dist/reset.css";
import "./App.css";
import { Col, Row } from "antd";
import Login from "./components/Login";

const homepage = {
  background: "#BCEAD5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  color: "#150050",
};

const loginForm = {
  background: "#DEF5E5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row gutter={16} justify="center" align="center">
        <Col flex span={12} style={homepage}>
          <h1>Welcome to Our Homepage</h1>
        </Col>
        <Col span={12} style={loginForm}>
          <Login onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
