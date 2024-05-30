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

const ModalAdd = (props) => {
  const { isModal, setIsModal } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModal(false);
  };
  const onFinish = async (values) => {
    const { name, tile, stt } = values;
  };

  return (
    <>
      <Modal
        title="Thêm danh bạ"
        open={isModal}
        onOk={() => {
          form.submit();
        }}
        okText="Thêm"
        onCancel={handleCancel}
        maskClosable={false}
        forceRender
      >
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item labelCol={{ span: 24 }} label="Tên" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
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
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Ghi chú"
                name="note"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea rows={3} />

              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModalAdd;
