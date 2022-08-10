import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsCalendarPlus } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "./../img/logo.jpeg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Home",
      name: "Home",
      icon: <MdSpaceDashboard />,
    },
    {
      path: "/AddAttendance",
      name: "Add Attendance",
      icon: <AiOutlineUsergroupAdd />,
    },
    {
      path: "/viewattendance",
      name: "View Attendance",
      icon: <BsCalendarPlus />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img
              src={logo}
              className="img-logo"
              // style={{ height: isOpen ? "100px" : "none" }}
            />
          </h1>
          <div
            style={{ marginLeft: isOpen ? "180px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
