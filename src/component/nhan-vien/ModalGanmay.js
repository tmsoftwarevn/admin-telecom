import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  message,
} from "antd";

const ModalGanMay = (props) => {
  const { isModalGanMay, setIsModalGanMay } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalGanMay(false);
  };

  const onFinish = async (values) => {
    const { name, tile, stt } = values;
    // bật modal 2 khi ok
  };

  return (
    <>
      <Modal
        title="Gán máy nhanh"
        open={isModalGanMay}
        onOk={() => {
          form.submit();
        }}
        okText="Xác nhận"
        onCancel={handleCancel}
        maskClosable={false}
        forceRender
      >
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Tên nhân viên"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Hotline"
                name="hotline"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{
                    width: "100%",
                  }}
                  placeholder="Hotline"
                  options={[
                    {
                      value: "RDS-016567687",
                      label: "RDS-016567687",
                    },
                    {
                      value: "VDF-042349864",
                      label: "VDF-042349862",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Máy nhanh"
                name="maynhanh"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{
                    width: "100%",
                  }}
                  placeholder="Máy nhanh"
                  options={[
                    {
                      value: "5435",
                      label: "5435",
                    },
                    {
                      value: "6546",
                      label: "6546",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModalGanMay;
