import { Flex, Menu, MenuProps } from "antd"
import Sider from "antd/es/layout/Sider"
import "./sidenav.css"
import { useNavigate } from "react-router-dom"
import {
  HomeOutlined,
  SettingOutlined,
  CodepenOutlined,
  LogoutOutlined,
} from "@ant-design/icons"

type MenuItem = Required<MenuProps>["items"][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps["items"] = [
  getItem("Posts", "/", <HomeOutlined />),
  getItem("Settings", "sub", <SettingOutlined />, [
    getItem("Profile", "/settings"),
    getItem("App preferences", "/preferences"),
    getItem("Terms and conditions", "/toc"),
  ]),
  getItem("Counter", "/counter", <CodepenOutlined />),
  getItem("Log out", "/logout", <LogoutOutlined />),
]

export const Sidenav = () => {
  const navigate = useNavigate()

  const handleClick = ({ key }: any) => {
    console.log("KEY: ", key)
    if (key) {
      navigate(key)
    }
  }

  return (
    <Sider width={256} className="sider">
      <Flex gap="middle" vertical>
        {/* <Button type="primary">New Post</Button>
        <Button href="/">Posts</Button>
        <Link to="settings">
          <Button href="/settings">Settings</Button>
        </Link>
        <Link to="counter">
          <Button href="/counter">Counter</Button>
        </Link> */}

        <Menu
          onClick={handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Flex>
    </Sider>
  )
}
