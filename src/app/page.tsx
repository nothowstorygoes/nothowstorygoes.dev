import styles from "./page.module.css";
import React from 'react';
import Slideshow from "./slideshow.js";



function Text() {
  return (
    <div className={styles.container}>
    <span className={styles.type}>Hi There!<br/>This is my personal portfolio. <br/> Here you can find all of my previous works <br/>and what I am currently working on.</span>
    </div>
  )
}


export default function Home(){
  return (
      <main>
        <Text/>   
        <Slideshow/>
      </main>
      

  )};