"use client";
import styles from "./css/page.module.css";
import React from "react";
import Sidebar from "./components/menuburger.js";
import useTypeWriter from "./components/typewriter";

const Home = () => {
  const tw = useTypeWriter(
    "Hi There!\n \nThis is my personal portfolio.\nHere you can find my\nproject archive and all of my social platforms.\n"
  );
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap" className={styles.main}>
        <pre className={styles.container}>{tw}</pre>
      </main>
    </div>
  );
};

export default Home;
