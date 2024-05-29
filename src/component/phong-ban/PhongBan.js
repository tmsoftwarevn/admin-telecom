import { Button, Input, Popconfirm } from "antd";
import { CiBellOn, CiEdit, CiShoppingTag } from "react-icons/ci";
import { TiTicket } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./phongban.scss";
import { Select } from "antd";
import { Card, Col, Row, Dropdown, Space } from "antd";
import { Table } from "antd";
import InfoSetting from "../thong-ke/InfoSetting";
import { MdDelete } from "react-icons/md";

const title = "Xác nhận xóa ?";

const data = [
  {
    key: "1",
    code: "125659631321",
    name: "Khác",
    noidung: "rew  rew dsv3e rewr",
    createdAt: "10/10/2010",
    nhanvien: "3",
    action: "",
  },
  {
    key: "2",
    code: "125659631321",
    name: "DEV",
    noidung: "rew  rew dsv3e rewr",
    createdAt: "10/10/2010",
    nhanvien: "3",
    action: "",
  },
  {
    key: "3",
    code: "125659631321",
    name: "VIP",
    noidung: "rew  rew dsv3e rewr",
    createdAt: "10/10/2010",
    nhanvien: "3",
    action: "",
  },
];

const PhongBan = () => {
  const columns = [
    {
      title: "Mã phòng ban",
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
      title: "Tên phòng ban",
      dataIndex: "name",
    },
    {
      title: "Nội dung",
      dataIndex: "noidung",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
    },
    {
      title: "Số nhân viên",
      dataIndex: "nhanvien",
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
    <div className="phongban pb-3">
      <div className="phongban__header px-3 py-2 flex justify-between">
        <div className="phongban__header__left flex gap-4">
          <div className="text-xl font-semibold ">Phòng ban</div>
        </div>

        <div className="phongban__header__right flex gap-5 items-center">
          <Button type="primary">Thêm phòng ban</Button>

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

      <div className="mt-3 px-3">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};

export default PhongBan;
