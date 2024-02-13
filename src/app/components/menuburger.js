"use client";
import React from "react";
import { push as Menu } from "react-burger-menu";
import styles from "../css/menuburger.module.css";
import Link from "next/link";

const Sidebar = () => {

  const handleStateChange = (state) => {
    if (state.isOpen) {
      document.querySelector(".bm-burger-button").style.display = "none";
    } else {
      document.querySelector(".bm-burger-button").style.display = "block";
    }
  };

  return (
    <Menu
      burgerButtonClassName={styles.burgerButton}
      burgerBarClassName={styles.burgerBars}
      menuClassName={styles.menu}
      itemListClassName={styles.itemList}
      morphShapeClassName={styles.morphShape}
      itemClassName={styles.item}
      menuWrapClassName={styles.menuWrap}
      overlayClassName={styles.overlay}
      onStateChange={handleStateChange}
      pageWrapId="page-wrap"
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
