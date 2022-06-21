import React from "react";
import Logo from "../../../assets/img/png/logosinfondo.png";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
//import { logout } from "../../../api/auth";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
//   const userLogout = () => {
//     console.log("Cerrando sesión");
//     logout();
//     window.location.reload();
//   };
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="Alternate" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={()=>console.log("log off")}>
          <UserOutlined />
        </Button>
      </div>
    </div>
  );
}
