"use client";
import Slideshow from "../components/slideshow";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import useTypeWriter from "../components/typewriter";

const Prj = () => {
  const tw=useTypeWriter('This page is a collection of everything I have ever done.\n');
  return (
    <div style={{ overflowY: "auto", height: "100vh" }} id="outer-container">
      <Sidebar />
      <main style={{ overflowY: "auto", height: "100vh" }} id="page-wrap" className={styles.main}>
          <pre className={styles.container}>{tw}</pre>
        <Slideshow />
      </main>
    </div>
  );
};

export default Prj;
