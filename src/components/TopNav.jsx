import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
const TopNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["mail"]}
        onClick={({ key }) => {
          if (key === "abc") {
          } else {
            navigate(key);
          }
        }}
      >
        <Menu.Item key="/" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/form" icon={<MailOutlined />}>
          Form
        </Menu.Item>
      </Menu>
      <HomePage />
    </>
  );
};
export default TopNav;
