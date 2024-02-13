"use client";
import React from "react";
import { push as Menu } from "react-burger-menu";
import styles from "../css/menuburger.module.css";
import Link from "next/link";

const Sidebar = () => {
  var styleMenu = {
    bmBurgerButton: {
      position: "sticky",
      width: "40px",
      height: "35px",
      left: "80px",
      top: "107px",
    },
    "@media only screen and (max-width: 600px)": {
      bmBurgerButton: {
        left: "40px",
      },
    },
    "@media only screen and (min-width: 601px) and (max-width:1024)": {
      bmBurgerButton: {
        left: "60px",
      },
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
      itemClassName={styles.item}
      outerContainerId="outer-container"
      customBurgerIcon={<img src="/nothowstorygoes.dev/hmbmenu.svg" alt="" />}
    >
      <Link href="/">
        <p className={styles.itemList}>Home</p>
      </Link>
      <br />
      <Link href="/prjarch">
        <p className={styles.itemList}>Project Archive</p>
      </Link>
      <br />
      <Link href="/contacts">
        <p className={styles.itemList}>Contacts</p>
      </Link>
    </Menu>
  );
};

export default Sidebar;
