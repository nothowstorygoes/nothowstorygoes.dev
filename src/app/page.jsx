"use client";
import styles from "./css/page.module.css";
import React from "react";
import Sidebar from "./components/menuburger.js";

function Text() {
  return (
    <div className={styles.container}>
      <span className={styles.type}>
        Hi There!
        <br /> <br />
        This is my personal portfolio. <br /> Here you can find my <br />{" "}
        project archive and all of my social platforms.
      </span>
    </div>
  );
}

const Home = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap">
        <Text />
      </main>
    </div>
  );
};

export default Home;
