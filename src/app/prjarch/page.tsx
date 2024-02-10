"use client";
import Slideshow from "../components/slideshow";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";

function PrjText() {
  return (
    <span className={styles.prjText}>
      This page is a collection made of <br />
      everything I have ever done.
    </span>
  );
}

const Prj = () => {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }} id="outer-container">
      <Sidebar />
      <main style={{ overflowY: "auto", height: "100vh" }} id="page-wrap">
        <div className={styles.containerPrj}>
          <PrjText />
        </div>
        <Slideshow />
      </main>
    </div>
  );
};

export default Prj;
