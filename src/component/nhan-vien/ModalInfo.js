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

const ModalInfo = (props) => {
  const { isModalInfo, setIsModalInfo } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalInfo(false);
  };

  const onFinish = async (values) => {
    const { name, tile, stt } = values;
    // bật modal 2 khi ok
  };

  return (
    <>
      <Modal
        title="Thêm nhân viên thành công"
        open={isModalInfo}
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
                initialValue={"nguyen an"}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Số điện thoại"
                name="phone"
                initialValue={"0987654321"}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Phòng ban"
                name="phongban"
              >
                <Select
                  style={{
                    width: "100%",
                  }}
                  placeholder="Phòng ban"
                  disabled
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
              <Form.Item labelCol={{ span: 24 }} label="Vai trò" name="vaitro">
                <Select
                  style={{
                    width: "100%",
                  }}
                  placeholder="Vai trò"
                  disabled
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
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Mật khẩu"
                name="password"
                initialValue={"FSDF32E"}
              >
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModalInfo;
