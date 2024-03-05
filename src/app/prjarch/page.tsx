"use client";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import { Typewriter } from "react-simple-typewriter";
import ReactPlayer from "react-player/file";

const Prj = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap" className={styles.main}>
        <div className={styles.container}>
          <Typewriter
            words={[
              "This page is a collection of everything I \nhave ever done.",
            ]}
            typeSpeed={70}
          ></Typewriter>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.textCentered}>
        <p className={styles.playerText}>
          This is a brochure website for a lawyer using only HTML, CSS and
          JS.
        </p>
        </div>
        <div className={styles.playerWrapper}>
          <a href="http://avvcarloantonioesposito.altervista.org">
            <ReactPlayer
              url="/nothowstorygoes.dev/avv.mp4"
              className={styles.reactPlayer}
              volume={0}
              pip={false}
              muted={true}
              height="70%"
              width="70%"
              playing={true}
              loop={true}
              playsinline={true}
            />
          </a>
        </div>
        <div className={styles.textCentered}>
        <p className={styles.playerText}>
          Notes in Cloud is a fully functional PWA that lets you store your
          notes in PDF format inside the Firebase Cloud Storage. The app
          features a personal account where you can store your files and
          customize your slides with a cover image, as well as accessibility,
          letting you choose the theme of the app. The app is made in React.js
          using Next.js front-end framework, and uses various API for
          functionality. <br />Version 1.0 - Currently in development
        </p>
        </div>
        <div className={styles.itemContainer}>
          <a href="http://nothowstorygoes.github.io/notes-in-cloud/">
            <img
              src="/nothowstorygoes.dev/nic.png"
              alt="second item"
              className={styles.item}
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Prj;
