import { Breadcrumb, Button, Flex, Layout, Menu, theme } from "antd";
import { CiBellOn } from "react-icons/ci";
import { TiTicket } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import "./thongke.scss";
import { Select } from "antd";
import { Card, Col, Row, Dropdown, Space } from "antd";
import { Table } from "antd";
import InfoSetting from "./InfoSetting";

const options = [
  {
    value: "Trong tuần",
    label: "Trong tuần",
  },
  {
    value: "Hôm nay",
    label: "Hôm nay",
  },
  {
    value: "Trong tháng",
    label: "Trong tháng",
  },
  {
    value: "Tháng trước",
    label: "Tháng trước",
  },
  {
    value: "7 ngày gần đây",
    label: "7 ngày gần đây",
  },
];

const columns = [
  {
    title: "Máy khách",
    dataIndex: "maykhach",
  },
  {
    title: "Tổng số cuộc gọi",
    dataIndex: "call",
    sorter: {
      compare: (a, b) => a.call - b.call,
      multiple: 3,
    },
  },
  {
    title: "Cuộc gọi thành công",
    dataIndex: "call_success",
    sorter: {
      compare: (a, b) => a.call_success - b.call_success,
      multiple: 2,
    },
  },
  {
    title: "Cuộc gọi thất bại",
    dataIndex: "call_fail",
    sorter: {
      compare: (a, b) => a.call_fail - b.call_fail,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: "1",
    maykhach: "7207 Nguyễn Văn A",
    call: 98,
    call_success: 60,
    call_fail: 28,
  },
  {
    key: "2",
    maykhach: "7207 Nguyễn Văn A",
    call: 98,
    call_success: 60,
    call_fail: 28,
  },
  {
    key: "3",
    maykhach: "7207 Nguyễn Văn A",
    call: 98,
    call_success: 60,
    call_fail: 28,
  },
  {
    key: "4",
    maykhach: "7207 Nguyễn Văn A",
    call: 98,
    call_success: 60,
    call_fail: 28,
  },
];

const ThongKe = () => {
  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="thong-ke pb-3">
      <div className="thong-ke__header px-3 py-2 flex justify-between">
        <div className="thong-ke__header__left">
          <div className="text-xl font-semibold ">Thống kê</div>
          <div className="mt-3">
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Thống kê"
              onChange={handleChangeSelect}
              options={options}
            />
          </div>
        </div>
        <div className="thong-ke__header__right flex gap-5 items-center">
          <Button type="primary">Excel</Button>

          <div className="so-du">
            <div>Số dư</div>
            <div className="so-du__group flex gap-2">
              <div className="font-semibold">9.654.321 đ</div>
              <div>
                <CiBellOn className="text-xl" />
              </div>
            </div>
          </div>
          <div className="account flex gap-3 items-center">
            <div>
              <TiTicket className="text-xl" />
            </div>
            <div className="account_group">
              <div>Phạm Viết Chính</div>
              <div>Tmsoftware.vn</div>
            </div>
            <div className="cursor-pointer">
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    dropdownRender={
                       () =>  <InfoSetting />
                    }
                   
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
      <div className="thong-ke__content mt-3 px-3">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Số máy khách"
              className="font-semibold text-xl"
              bordered={false}
            >
              2
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Tổng số cuộc gọi"
              className="font-semibold text-xl"
              bordered={false}
            >
              35
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Tổng thời lượng gọi ra"
              className="font-semibold text-xl"
              bordered={false}
            >
              79 giây
            </Card>
          </Col>
        </Row>
      </div>

      <div className="mt-3 px-3">
        <Card title="Thống kê theo máy khách" bordered={false}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </div>
    </div>
  );
};

export default ThongKe;
