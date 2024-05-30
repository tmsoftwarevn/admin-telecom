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

const ModalEdit = (props) => {
  const { isModalEdit, setIsModalEdit } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalEdit(false);
  };
  const onFinish = async (values) => {
    const { name, tile, stt } = values;
  };

  return (
    <>
      <Modal
        title="Cập nhật phòng ban"
        open={isModalEdit}
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
                label="Tên phòng ban"
                name="name"
                initialValue={"VIP"}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Nội dung"
                name="noidung"
                rules={[
                  {
                    required: true,
                  },
                ]}
                initialValue={"Quản lý"}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEdit;
