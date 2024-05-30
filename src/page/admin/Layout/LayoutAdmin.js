import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Flex, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = [
    getItem(
      <div
        onClick={() =>
          navigate(`/admin/thong-ke`)
        }
      >
        Thống kê
      </div>,
      "1",
      <DesktopOutlined />
    ),
    getItem(
      <div
        onClick={() =>
          navigate(`/admin/lich-su-cuoc-goi`)
        }
      >
        Lịch sử cuộc gọi
      </div>,
      "3",
      <DesktopOutlined />
    ),
    getItem(
      <div
        onClick={() =>
          navigate(`/admin/danh-ba`)
        }
      >
        Danh bạ
      </div>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <div
        onClick={() =>
          navigate(`/admin/phong-ban`)
        }
      >
        Phòng ban
      </div>,
      "4",
      <DesktopOutlined />
    ),
    getItem(
      <div
        onClick={() =>
          navigate(`/admin/nhan-vien`)
        }
      >
        Nhân viên
      </div>,
      "5",
      <DesktopOutlined />
    ),
    getItem("Zalo Cloud", "sub1", <DesktopOutlined />, [
      getItem(<Link to="/admin/zcc">ZCC</Link>, "menu1"),
      getItem(<Link to="/admin/znc">ZNC</Link>, "menu22343"),
      
    ]),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
        
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={"200px"}
        // className="!bg-blue-600"
      >
        {/* <div className="demo-logo-vertical text-center text-white" >TM Software</div> */}

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          // className="!bg-blue-600"
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex justify="end" className="m-3">
            <Button type="primary" onClick={() => navigate("/game")}>
              Đổi mật khẩu
            </Button>
          </Flex>
        </Header> */}
        <Content
          style={{
            // margin: "16px",
          }}
        >
          <div
            style={{
              // padding: 24,
              minHeight: 500,
              // background: colorBgContainer,
              background: "#ecf0f1",
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />

          </div>

        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
            ©{new Date().getFullYear()} Created by TM Software
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
