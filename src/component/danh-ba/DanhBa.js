import {
  Breadcrumb,
  Button,
  Flex,
  Input,
  Layout,
  Menu,
  Popconfirm,
  theme,
} from "antd";
import { CiBellOn, CiEdit, CiShoppingTag } from "react-icons/ci";
import { TiTicket } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./danhba.scss";
import { Select } from "antd";
import { Card, Col, Row, Dropdown, Space } from "antd";
import { Table } from "antd";
import InfoSetting from "../thong-ke/InfoSetting";
import { MdDelete } from "react-icons/md";
import ModalEdit from "./ModalEdit";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalAdd from "./ModalAdd";

const title = "Xác nhận xóa ?";

const data = [
  {
    key: "1",
    code: "125659631321",
    name: "Nguyễn Văn A",
    phone: "0369875214",
    createdAt: "10/10/2010",
    note: "Dùng để test",
    action: "",
  },
  {
    key: "2",
    code: "125659631321",
    name: "Nguyễn Văn A",
    phone: "0369875214",
    createdAt: "10/10/2010",
    note: "Dùng để test",
    action: "",
  },
  {
    key: "3",
    code: "125659631321",
    name: "Nguyễn Văn A",
    phone: "0369875214",
    createdAt: "10/10/2010",
    note: "-",
    action: "",
  },
];

const DanhBa = () => {
  const columns = [
    {
      title: "Mã",
      dataIndex: "code",
      render: (text, record) => {
        return (
          <>
            <div className="text-green-600 font-bold">1976321346546</div>
          </>
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      render: (text, record, index) => {
        return (
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              fontSize: "18px",
              gap: 20,
            }}
          >
            <div
              style={{
                whiteSpace: "nowrap",
              }}
            >
              <Popconfirm
                placement="left"
                title={title}
                onConfirm={() => {
                  confirm(record?.id);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  size="small"
                  type="primary"
                  danger
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <MdDelete />
                </Button>
              </Popconfirm>
            </div>

            <div>
              <Button
                size="small"
                type="primary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <CiEdit
                  onClick={() => setIsModalUpdate(true)}
                  style={{ fontSize: "15px" }}
                />
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  ////
  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeDateStart = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeDateEnd = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChangeTrangThai = (value) => {
    console.log(`selected ${value}`);
  };

  const confirm = () => {};

  return (
    <>
      <div className="danhba pb-3">
        <div className="danhba__header px-3 py-2 flex justify-between">
          <div className="danhba__header__left flex gap-4">
            <div className="text-xl font-semibold ">Danh bạ</div>
            <div
              className={
                location.pathname === "/admin/danh-ba"
                  ? "cursor-pointer text-base text-blue-600"
                  : "cursor-pointer text-base"
              }
              onClick={() => navigate("/admin/danh-ba")}
            >
              Danh bạ chung
            </div>
            <div
              className={
                location.pathname === "/admin/danh-ba-noi-bo"
                  ? "cursor-pointer text-base text-blue-600"
                  : "cursor-pointer text-base"
              }
              onClick={() => navigate("/admin/danh-ba-noi-bo")}
            >
              Danh bạ nội bộ
            </div>
            <div
              className={
                location.pathname === "/admin/danh-ba-import"
                  ? "cursor-pointer text-base text-blue-600"
                  : "cursor-pointer text-base"
              }
              onClick={() => navigate("/admin/danh-ba-import")}
            >
              Import
            </div>
          </div>
          <div className="danhba__header__right flex gap-5 items-center">
            <Button type="primary" onClick={() => setIsModal(true)}>Thêm liên hệ</Button>

            <CiBellOn className="text-2xl" />
            <div className="account flex gap-3 items-center">
              <div>
                <CiShoppingTag className="text-xl" />
              </div>
              <div className="account_group">
                <div>Chủ công ty</div>
                <div>Tmsoftware.vn</div>
              </div>
              <div className="cursor-pointer">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      dropdownRender={() => <InfoSetting />}
                      placement="bottomLeft"
                    >
                      <IoIosArrowDown className="text-xl" />
                    </Dropdown>
                  </Space>
                </Space>
              </div>
            </div>
          </div>
        </div>
        <div className="danhba__content mt-3 px-3">
          <Row gutter={30}>
            <Col span={4}>
              <Input placeholder="Tên" />
            </Col>
            <Col span={4}>
              <Input placeholder="Số điện thoại" />
            </Col>
          </Row>
        </div>

        <div className="mt-3 px-3">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              showSizeChanger: true,
              position: ["bottomCenter"],
              pageSizeOptions: [2, 10, 50, 100],
            }}
          />
        </div>
      </div>

      <ModalEdit
        isModalUpdate={isModalUpdate}
        setIsModalUpdate={setIsModalUpdate}
      />
      <ModalAdd isModal ={isModal} setIsModal ={setIsModal} />
    </>
  );
};

export default DanhBa;
