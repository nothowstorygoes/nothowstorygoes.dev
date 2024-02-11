"use client";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import useTypeWriter from "../components/typewriter";
import ReactPlayer from "react-player/file";

const Prj = () => {
  const tw = useTypeWriter(
    "This page is a collection of everything I \nhave ever done.\n"
  );
  return (
    <div style={{ overflowY: "auto", height: "100vh" }} id="outer-container">
      <Sidebar />
      <main
        style={{ overflowY: "auto", height: "100vh" }}
        id="page-wrap"
        className={styles.main}
      >
        <pre className={styles.container}>{tw}</pre>
        <div className={styles.playerWrapper}>
          <a href="https://avvcarloantonioesposito.altervista.org">
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
          <p className="playerText">This is a brochure website for a lawyer using only HTML, CSS and JS.</p>
        </div>
      </main>
    </div>
  );
};

export default Prj;
