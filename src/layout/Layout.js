import React from "react";
import { Layout, Menu, Breadcrumb, Image } from "antd";
import NavMenu from "../components/NavMenu";
const { Header, Content } = Layout;

const PageLayout = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Image
            width={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpQ9ivucSNFDm1O7KIznSLqdewQ1O89zS6gB0CW8Xtxknsf_-"
          />
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <NavMenu />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
