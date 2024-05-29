import { Breadcrumb, Button, Flex, Input, Layout, Menu, theme } from "antd";
import { CiBellOn, CiShoppingTag } from "react-icons/ci";
import { TiTicket } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./lichsucuocgoicanhan.scss";
import { Select } from "antd";
import { Card, Col, Row, Dropdown, Space } from "antd";
import { Table } from "antd";
import InfoSetting from "../thong-ke/InfoSetting";
import { DatePicker } from "antd";
import { render } from "@testing-library/react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "antd";

const columns = [
  {
    title: "Trạng thái",
    dataIndex: "trangthai",
    render: (text, record) => {
      return (
        <>
          <div>Thành công</div>
          <div>10:48:05 04/04/2023</div>
        </>
      );
    },
  },
  {
    title: "Hướng",
    dataIndex: "huong",
    render: (text, record) => {
      return (
        <div className="flex items-center">
          <span className="text-red-400">Gọi nhỡ</span>
          <Tooltip title="Không nhấc máy/Thuê bao/Sai số/Hotline bị khóa">
            <FaRegCircleQuestion className="ml-2" />
          </Tooltip>
        </div>
      );
    },
  },
  {
    title: "Hotline",
    dataIndex: "hotline",
    render: (text, record) => {
      return (
        <div>
          <div>Hotline</div>
          <div className="text-gray-400">0987654321</div>
        </div>
      );
    },
  },
  {
    title: "Gọi từ",
    dataIndex: "goitu",
    render: (text, record) => {
      return (
        <div>
          <div className="flex items-center">
            <FaUserCircle className="mr-1" /> Nguyễn Văn A
          </div>
          <div className="text-gray-400">EXT 707</div>
        </div>
      );
    },
  },
  {
    title: "Gọi đến",
    dataIndex: "goiden",
  },
  {
    title: "Thời lượng",
    dataIndex: "thoiluong",
  },
  {
    title: "Phòng ban",
    dataIndex: "phongban",
  },
  {
    title: "File ghi âm",
    dataIndex: "file",
    render: (text, record) => {
      return (
        <div className="flex items-center text-green-600 cursor-pointer">
          <IoIosPlay className="mr-1 text-green-600 text-xl" />
          Nghe lại
        </div>
      );
    },
  },
];
const data = [
  {
    key: "1",
    trangthai: "7207 Nguyễn Văn A",
    huong: "Gọi nhỡ",
    hotline: 60,
    goitu: 28,
    goiden: "0123456789",
    thoiluong: "00:12:54",
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
    thoiluong: "00:12:54",
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
    thoiluong: "00:12:54",
    phongban: "-",
    file: "fdsf",
  },
];

const trangthai = [
  {
    value: "Trong tuần",
    label: "Đã nhận",
  },
  {
    value: "Hôm nay",
    label: "Gọi nhỡ",
  },
];
const huong = [
  {
    value: "Trong tuần",
    label: "Gọi ra",
  },
  {
    value: "Hôm nay",
    label: "Gọi vào",
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
const LichSuCuocGoiCaNhan = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <div className="lichsucuocgoi pb-3">
      <div className="lichsucuocgoi__header px-3 py-2 flex justify-between">
        <div className="lichsucuocgoi__header__left flex gap-3">
          <div className="text-xl font-semibold ">Lịch sử cuộc gọi</div>
          <div
            className={
              location.pathname === "/admin/lich-su-cuoc-goi"
                ? "cursor-pointer text-base text-blue-600"
                : "cursor-pointer text-base"
            }
            onClick={() => navigate("/admin/lich-su-cuoc-goi")}
          >
            Lịch sử chung
          </div>
          <div
            className={
              location.pathname === "/admin/lich-su-cuoc-goi-ca-nhan"
                ? "cursor-pointer text-base text-blue-600"
                : "cursor-pointer text-base"
            }
            onClick={() => navigate("/admin/lich-su-cuoc-goi-ca-nhan")}
          >
            Lịch sử cá nhân
          </div>
        </div>
        <div className="lichsucuocgoi__header__right flex gap-5 items-center">
          <Button type="primary">Xuất Excel</Button>

          <CiBellOn className="text-2xl" />
          <div className="account flex gap-3 items-center">
            <div>
              <CiShoppingTag className="text-xl" />
            </div>
            <div className="account_group">
              <div>Cá nhân</div>
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
      <div className="lichsucuocgoi__content mt-3 px-3">
        <Row gutter={30}>
          <Col span={4}>
            <Space direction="vertical">
              <DatePicker
                format={{
                  format: "YYYY-MM-DD",
                  type: "mask",
                }}
                placeholder="Từ ngày"
                onChange={onChangeDateStart}
              />
            </Space>
          </Col>
          <Col span={4}>
            <Space direction="vertical">
              <DatePicker
                format={{
                  format: "YYYY-MM-DD",
                  type: "mask",
                }}
                placeholder="Đến ngày"
                onChange={onChangeDateEnd}
              />
            </Space>
          </Col>
          <Col span={4}>
            <Input placeholder="Số điện thoại" />
          </Col>
          <Col span={4}>
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Trạng thái"
              onChange={handleChangeTrangThai}
              options={trangthai}
            />
          </Col>
          <Col span={4}>
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Hướng"
              onChange={handleChangeTrangThai}
              options={huong}
            />
          </Col>
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
        </Row>
      </div>

      <div className="mt-3 px-3">
        <Card title="Thống kê theo máy khách" bordered={false}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              showSizeChanger: true,
              position: ["bottomCenter"],
              pageSizeOptions: [2, 10, 50, 100],
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default LichSuCuocGoiCaNhan;
