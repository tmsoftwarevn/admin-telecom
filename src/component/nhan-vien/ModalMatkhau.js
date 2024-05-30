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

const ModalMatkhau = (props) => {
  const { isModalPasswword, setIsModalPasswword,isModalInfo, setIsModalInfo } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalPasswword(false);
  };
  const onFinish = async (values) => {
    const { name, tile, stt } = values;
    setIsModalPasswword(false);
    setIsModalInfo(true)
  };

  return (
    <>
      <Modal
        title="Tạo mật khẩu cho nhân viên"
        open={isModalPasswword}
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
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
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
export default ModalMatkhau;
