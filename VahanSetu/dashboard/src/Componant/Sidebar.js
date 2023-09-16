import React from "react";

import {
  BsFillCarFrontFill,
  BsGrid1X2Fill,
  BsPersonCircle,
  BsFillPersonLinesFill,
  BsPeopleFill,
  BsFillGearFill,
  BsFillClipboardHeartFill
  

} from "react-icons/bs";

import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const pages = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BsGrid1X2Fill className="icon" />,
    },
    {
      path: "/user",
      name: "User",
      icon: <BsPersonCircle className="icon" />,

    },
    {
      path:"/sale",
      name:"Sale",
      icon:<BsPeopleFill className="icon"/>,
    },
    {
      path:"/distributor",
      name:"Distributor",
      icon:<BsFillPersonLinesFill className="icon"/>,
      
    },
    {
      path:"/request",
      name:"Request",
      icon: <BsFillClipboardHeartFill className="icon"/>
    },
    {
      path:"/setting",
      name:"Setting",
      icon:<BsFillGearFill className="icon"/>,
    }
  ];
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : " "}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillCarFrontFill className="icon_header" /> VahanSetu
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {pages.map((page, index) => (
          <Link
            to={page.path}
            style={{ textDecoration: "none", color: "white" }}
            key={index}
          >
            <li className="sidebar-list-item">
              {page.icon}
              {page.name}
            </li>
          </Link>
        ))}
        {/* </ul> */}

        {/* <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <Link to={`/user`} style={{ textDecoration: "none", color: "white" }}>
          <li className="sidebar-list-item">
            <BsPersonCircle className="icon" /> User
          </li>
        </Link>
        <Link
          to={`/request`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <li className="sidebar-list-item">
            <BsFillFileEarmarkTextFill className="icon" /> Request
          </li>
        </Link>
        <li className="sidebar-list-item">
          <a href=" ">
            <BsPeopleFill className="icon" /> Sale
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href=" ">
            <BsFillPersonLinesFill className="icon" /> Distributor
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
