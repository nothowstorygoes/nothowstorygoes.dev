"use client";
import styles from "./css/page.module.css";
import React from "react";
import Sidebar from "./components/menuburger.js";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap" className={styles.main}>
        <div className={styles.container}>
        <Typewriter cursor={true} cursorBlinking={true}
          words={[
            "Hi There! <br/> This is my personal portfolio.\nHere you can find my\nproject archive and all of my social platforms.",
          ]}
          typeSpeed={90}
        ></Typewriter>
        </div>
      </main>
    </div>
  );
};

export default Home;
