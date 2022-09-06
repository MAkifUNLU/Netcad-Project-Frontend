import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import "../App.css";
const { SubMenu } = Menu;
const { Sider } = Layout;

const NavMenu = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Shoping">
          <Menu.Item key="1">
            {" "}
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4">
            {" "}
            <Link to="/cart">Cart</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Account">
          <Menu.Item key="5">Profile</Menu.Item>
          <Menu.Item key="6">Wallet</Menu.Item>
          <Menu.Item key="7">Order History</Menu.Item>
          <Menu.Item key="8">Settings</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavMenu;
