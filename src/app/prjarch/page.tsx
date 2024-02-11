"use client";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import useTypeWriter from "../components/typewriter";
import ReactPlayer from "react-player/file";

const Prj = () => {
  const tw = useTypeWriter(
    "This page is a collection of everything I \nhave ever done."
  );
  return (
    <div id="outer-container">
      <Sidebar />
      <main
        id="page-wrap"
        className={styles.main}
      >
        <pre className={styles.container}>{tw}</pre>
        <div className={styles.playerWrapper}>
          <a href="http://avvcarloantonioesposito.altervista.org">
          <ReactPlayer
            url="/nothowstorygoes.dev/avv.mp4"
            className={styles.reactPlayer}
            volume={0}
            pip={false}
            muted={true}
            height='70%'
            width='70%'
            playing={true}
            loop={true}
            playsinline={true}
          />
          </a>
          <p className={styles.playerText}>This is a brochure website for <br />a lawyer using only HTML, CSS and JS.</p>
        </div>
      </main>
    </div>
  );
};

export default Prj;
