"use client";
import React from "react";
import Sidebar from "../components/menuburger";
import styles from "../css/page.module.css";

function Social({ info }) {
  let name = info.nome;
  let url = info.url;
  let ico = info.ico;
  return (
    <div className={styles.contactItem}>
      <a href={url}>
        <img src={ico} alt="" className={styles.contactImg} />
      </a>
      <p className={styles.contactText}> {name}</p>
    </div>
  );
}

function ProPic() {
  return <img src="./propic.jpg" alt="profile pic" className={styles.propic} />;
}
const Contacts = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap">
        <div className={styles.parentContainer}>
          <div className={styles.contactsContainer}>
            <Social
              info={{
                nome: "esposito.pioalessandro@gmail.com",
                url: "mailto:esposito.pioalessandro@gmail.com",
                ico: "./icons/gmail.png",
              }}
            />
            <Social
              info={{
                nome: "nothowstorygoes",
                url: "https://github.com/nothowstorygoes",
                ico: "./icons/github.png",
              }}
            />
            <Social
              info={{
                nome: "Pio Alessandro Esposito",
                url: "NULL",
                ico: "./icons/linkedin.png",
              }}
            />
          </div>
          <ProPic />
        </div>
      </main>
    </div>
  );
};

export default Contacts;
