"use client";
import styles from "./css/page.module.css";
import React from "react";
import Sidebar from "./components/menuburger.js";
import useTypeWriter from './components/typewriter';

const tw = useTypeWriter('Hi There!\n \n This is my personal portfolio.\n Here you can find my\n project archive and all of my social platforms.');

const Home = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap">
        <pre>{tw}</pre>
      </main>
    </div>
  );
};

export default Home;
