import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import Links from "../NavLinks/Links";
import ModeBtn from "../ModeBtn/ModeBtn";
import "./SideBar.css";

const SideBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="menuBtn" onClick={() => setShow(!show)}>
        <HiBars3BottomRight />
      </button>
      <div className={`Sidebar ${show ? "show" : ""}`}>
        <button className="closeBtn" onClick={() => setShow(false)}>
          <MdClose className="closeIcon" />
        </button>
        <ul className="sidebar-links">
          <Links />
        </ul>
        <ModeBtn />
      </div>
    </>
  );
};

export default SideBar;
