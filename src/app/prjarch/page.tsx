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
          <p className={styles.playerText}>
          This is a brochure website for <br />a lawyer using only HTML, CSS and
          JS.
        </p>
        </div>
      </main>
    </div>
  );
};

export default Prj;
