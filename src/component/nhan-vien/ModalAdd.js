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

const ModalAdd = (props) => {
  const { isModal, setIsModal, isModalPasswword, setIsModalPasswword } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModal(false);
  };
  const onFinish = async (values) => {
    const { name, tile, stt } = values;
    setIsModalPasswword(true)
    setIsModal(false);        // bật modal 2 khi ok
  };

  return (
    <>
      <Modal
        title="Thêm nhân viên"
        open={isModal}
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
            <Col span={12}>
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
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Số điện thoại"
                name="phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Phòng ban"
                name="phongban"
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
                  placeholder="Phòng ban"
                  options={[
                    {
                      value: "Vip",
                      label: "vip",
                    },
                    {
                      value: "REW",
                      label: "DFG",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Vai trò"
                name="vaitro"
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
                  placeholder="Vai trò"
                  options={[
                    {
                      value: "Nhân viên",
                      label: "Nhân viên",
                    },
                    {
                      value: "Quản lý",
                      label: "Quản lý",
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
export default ModalAdd;
