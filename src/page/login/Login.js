import React, { useEffect, useState } from "react";
import "./login.scss";

import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("Tm media")) {
      navigate("/admin/lienhe");
    }
  }, []);
  const onFinish = async (values) => {
    const { name, password } = values;
    let res = "";
    if (res && res.EC === 1) {
      navigate("/admin/lienhe");
      sessionStorage.setItem("Tm media", "login");
    } else {
      message.error("Tài khoản hoặc mật khẩu không đúng !");
    }
  };

  return (
    <>
      <div className="content-p ">
        <div className="form-content bg-white">
          <div className="tm">GOLF</div>
          <Form name="basic" onFinish={onFinish} autoComplete="off">
            <Form.Item
              labelCol={{ span: 24 }}
              name="name"
              label="Tài khoản"
              rules={[
                {
                  required: true,
                  message: "Nhập tài khoản!",
                },
              ]}
            >
              <Input placeholder="Tên đăng nhập" />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu",
                },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
        <a href="https://tmsoftware.vn/"  className="tms cursor-pointer hover:text-blue-600" >Design by TM Software</a>
      </div>
     
    </>
  );
};

export default Login;
