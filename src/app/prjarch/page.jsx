"use client";
import Sidebar from "../components/menuburger";
import styles from "../css/prjarch.module.css";
import { Typewriter } from "react-simple-typewriter";
import Project from "./prj/prj";

const Prj = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap" className={styles.main}>
        <div className={styles.container}>
          <Typewriter
            words={[
              "This page is a collection of everything I have ever done.",
            ]}
            typeSpeed={70}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Project
          content={{
            text: "This is a brochure website for a lawyer using only HTML, CSS and JS.",
            url: "http://avvcarloantonioesposito.altervista.org",
            img: "/nothowstorygoes.dev/avv.png",
          }}
        />
        <Project
          content={{
            text: "Notes in Cloud is a fully functional PWA that lets you store your notes in PDF format inside the Firebase Cloud Storage. The app features a personal account where you can store your files and customize your slides with a cover image, as well as accessibility, letting you choose the theme of the app. The app is made in React.js using Next.js front-end framework, and uses various API for functionality. Version 1.0 - Currently in development",
            url: "http://nothowstorygoes.github.io/notes-in-cloud/",
            img: "/nothowstorygoes.dev/nic.png",
          }}
        />

      </main>
    </div>
  );
};

export default Prj;
