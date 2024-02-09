"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Link } from "react-router-dom";
import styles from "../css/page.module.css";

const Menu = dynamic(() => import('react-burger-menu/lib/menus/push'), {
  ssr: false
});

const Sidebar = () => {
  var styleMenu = {
    bmBurgerButton: {
      position: "fixed",
      width: "40px",
      height: "35px",
      left: "80px",
      top: "107px",
    },
    bmBurgerBars: {
      background: "#ffff",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      left: 0,
      top: 0,
    },
    bmMenu: {
      background: "rgba(0,0,0,0)",
      right: "0",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflowY: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#ffff",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(18, 12, 33, 0.6)",
      top: 0,
      right: 0,
    },
  };

  const handleStateChange = (state) => {
    if (state.isOpen) {
      document.querySelector(".bm-burger-button").style.display = "none";
    } else {
      document.querySelector(".bm-burger-button").style.display = "block";
    }
  };

  return (
    <Menu
      styles={styleMenu}
      onStateChange={handleStateChange}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      customBurgerIcon={<img src="/hmbmenu.svg" />}
    >
      <Link to="/">
        <p className={styles.itemlist}>Home</p>
      </Link>
      <br />
      <br />
      <Link to="/project-archive">
        <p className={styles.itemlist}>Project Archive</p>
      </Link>
      <br />
      <br />
      <Link to="/contacts">
        <p className={styles.itemlist}>Contacts</p>
      </Link>
    </Menu>
  );
};

export default Sidebar;
``;
