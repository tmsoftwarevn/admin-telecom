import { Breadcrumb, Button, Flex, Input, Layout, Menu, Popconfirm, theme } from "antd";
import { CiBellOn, CiEdit, CiShoppingTag } from "react-icons/ci";
import { TiTicket } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./nhanvien.scss";
import { Select } from "antd";
import { Card, Col, Row, Dropdown, Space } from "antd";
import { Table } from "antd";
import InfoSetting from "../thong-ke/InfoSetting";
import { DatePicker } from "antd";
import { render } from "@testing-library/react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const title = "Xác nhận xóa ?";

const data = [
  {
    key: "1",
    trangthai: "7207 Nguyễn Văn A",
    huong: "Gọi ra",
    hotline: 60,
    goitu: 28,
    goiden: "0123456789",
    thoiluong: "12/11/2024",
    phongban: "-",
    file: "fdsf",
  },
  {
    key: "2",
    trangthai: "7207 Nguyễn Văn A",
    huong: "Gọi ra",
    hotline: 60,
    goitu: 28,
    goiden: "0123456789",
    thoiluong: "5/5/2025",
    phongban: "-",
    file: "fdsf",
  },
  {
    key: "3",
    trangthai: "7207 Nguyễn Văn A",
    huong: "Gọi ra",
    hotline: 60,
    goitu: 28,
    goiden: "0123456789",
    thoiluong: "4/7/2025",
    phongban: "-",
    file: "fdsf",
  },
];

const boloc = [
  {
    value: "Trong tuần",
    label: "Thời lượng",
  },
  {
    value: "Hôm nay",
    label: "Tên nhân viên",
  },
  {
    value: "Hôm nay",
    label: "Tên phòng ban",
  },
];
const Nhanvien = () => {
    const columns = [
        {
          title: "Tên",
          dataIndex: "ten",
          render: (text, record) => {
            return (
              <>
                <div className="font-semibold">Quang hà</div>
                <div>09632588741</div>
              </>
            );
          },
        },
        {
          title: "Phòng ban",
          dataIndex: "phongban",
          render: (text, record) => {
            return (
              <div>
                DEV
              </div>
            );
          },
        },
        {
          title: "Vai trò",
          dataIndex: "vaitro",
          render: (text, record) => {
            return (
              <div>
                Quản lý
              </div>
            );
          },
        },
        {
          title: "Máy nhánh",
          dataIndex: "maynhanh",
          render: (text, record) => {
            return (
              <div>
                7207-Đang hoạt động
              </div>
            );
          },
        },
        {
          title: "Hotline",
          dataIndex: "hotline",
          render: (text, record) => {
            return (
              <>
                <div className="font-semibold">TM Software</div>
                <div>0896512158</div>
              </>
            );
          },
        },
        {
          title: "Ngày hết hạn",
          dataIndex: "thoiluong",
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
                    <CiEdit style={{ fontSize: "15px" }} />
                  </Button>
                </div>
              </div>
            );
          },
        },
      ];
    //////
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
    <div className="nhanvien pb-3">
      <div className="nhanvien__header px-3 py-2 flex justify-between">
        <div className="nhanvien__header__left flex gap-3">
          <div className="text-xl font-semibold ">Nhân viên</div>
          <div className="cursor-pointer text-base">Nhân viên</div>
          <div className="cursor-pointer text-base">Máy nhánh</div>
        </div>
        <div className="nhanvien__header__right flex gap-5 items-center">
          <Button type="primary">Thêm nhân viên</Button>

          <CiBellOn className="text-2xl" />
          <div className="account flex gap-3 items-center">
            <div>
              <CiShoppingTag className="text-xl" />
            </div>
            <div className="account_group">
              <div>Phạm Viết Chính</div>
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
      <div className="nhanvien__content mt-3 px-3 flex justify-between">
        <div>
          <Row gutter={20}>
            <Col>
              <Input width={"250px"} placeholder="Họ tên" />
            </Col>
            <Col>
              <Input width={"250px"} placeholder="Số điện thoại" />
            </Col>
          </Row>
        </div>

        <Col span={4}>
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Bộ lọc"
            onChange={handleChangeTrangThai}
            options={boloc}
          />
        </Col>
      </div>

      <div className="mt-3 px-3">
        <Card title="Thống kê theo máy khách" bordered={false}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </div>
    </div>
  );
};

export default Nhanvien;
