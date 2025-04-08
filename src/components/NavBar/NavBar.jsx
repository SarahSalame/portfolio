import React from "react";
import "./NavBar.css";
import Links from "../NavLinks/Links";
import ModeBtn from "../ModeBtn/ModeBtn";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1 className="logo">Sarah Salame</h1>
      <div className="nav-links">
        <Links />
      </div>
      <div className="modeBtn">
      <ModeBtn/>
      </div>
      <SideBar />
    </nav>
  );
};

export default NavBar;
