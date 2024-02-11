"use client";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import useTypeWriter from "../components/typewriter";

const Prj = () => {
  const tw=useTypeWriter('This page is a collection of everything I \nhave ever done.\n');
  return (
    <div style={{ overflowY: "auto", height: "100vh" }} id="outer-container">
      <Sidebar />
      <main style={{ overflowY: "auto", height: "100vh" }} id="page-wrap" className={styles.main}>
          <pre className={styles.container}>{tw}</pre>
      </main>
    </div>
  );
};

export default Prj;
