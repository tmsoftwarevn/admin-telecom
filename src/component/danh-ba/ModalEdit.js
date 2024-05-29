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
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";

const ModalEdit = (props) => {
  const { fetch_all_phanqua, isModalUpdate, setIsModalUpdate, dataUpdate } =
    props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalUpdate(false);
  };
  const onFinish = async (values) => {
    const { name, tile, stt } = values;
  };

  useEffect(() => {
    form.resetFields();
  }, [dataUpdate]);

  return (
    <>
      <Modal
        title="Cập nhật Danh bạ"
        open={isModalUpdate}
        onOk={() => {
          form.submit();
        }}
        okText="Cập nhật"
        onCancel={handleCancel}
        maskClosable={false}
        forceRender
      >
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Mã"
                name="code"
                initialValue={"231354"}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Tên"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                initialValue={"Nguyễn An"}
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
                initialValue={"0987654123"}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Ngày tạo"
                name="createdAt"
                rules={[
                  {
                    required: true,
                  },
                ]}
                initialValue={"10/10/2110"}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Ghi chú"
                name="note"
                rules={[
                  {
                    required: true,
                  },
                ]}
                initialValue={"ghi chú fsdf"}
              >
                <TextArea rows={3}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEdit;
