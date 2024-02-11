"use client";
import styles from "./css/page.module.css";
import React from "react";
import Sidebar from "./components/menuburger.js";
import useTypeWriter from './components/typewriter';



const Home = () => {
  const tw = useTypeWriter('Hi There!\n \nThis is my personal portfolio.\nHere you can find my\nproject archive and all of my social platforms.');
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap">
        <div className={styles.container}>
        <pre>{tw}</pre>
        </div>
      </main>
    </div>
  );
};

export default Home;
