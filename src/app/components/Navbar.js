import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

const Navbar = () => (
  <Menu mode="horizontal">
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Mentor
    </Menu.Item>
    <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
      Mentee
    </Menu.Item>
    <Menu.Item key="alipay">Signup/Login</Menu.Item>
  </Menu>
);

export default Navbar;
