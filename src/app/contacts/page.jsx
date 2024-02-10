"use client";
import React from "react";
import Sidebar from "../components/menuburger";
import styles from "../css/page.module.css";
import Image from "next/image";

function Social({ info }) {
  let name = info.nome;
  let url = info.url;
  let ico = info.ico;
  return (
    <div className={styles.contactItem}>
      <a href={url}>
      <Image src={ico} className={styles.contactImg} alt=""/>
      </a>
      <p className={styles.contactText}> {name}</p>
    </div>
  );
}

function ProPic() {
  return <Image src="/nextjs-github-pages/propic.jpg" alt="profile pic" className={styles.propic} />;
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
                ico: "/nextjs-github-pages/icons/gmail.png",
              }}
            />
            <Social
              info={{
                nome: "nothowstorygoes",
                url: "https://github.com/nothowstorygoes",
                ico: "/nextjs-github-pages/icons/github.png",
              }}
            />
            <Social
              info={{
                nome: "Pio Alessandro Esposito",
                url: "NULL",
                ico: "/nextjs-github-pages/icons/linkedin.png",
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
