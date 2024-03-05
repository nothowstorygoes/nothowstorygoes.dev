"use client";
import React from "react";
import Sidebar from "../components/menuburger";
import styles from "../css/contacts.module.css";
import Image from "next/image";
import Link from "next/link";

function Social({ info }) {
  let name = info.nome;
  let url = info.url;
  let ico = info.ico;
  return (
    <div className={styles.contactItem}>
      <a href={url}>
        <img src={ico} className={styles.contactImg} alt="" />
      </a>
      <p className={styles.contactText}> {name}</p>
    </div>
  );
}

function Email({ info }) {
  let name = info.nome;
  let ico = info.ico;
  return (
    <div className={styles.contactItem}>
      <Link href={"mailto:esposito.pioalessandro@gmail.com"}>
        <img src={ico} className={styles.contactImg} alt="" />
      </Link>
      <p className={styles.contactText}> {name}</p>
    </div>
  );
}

function ProPic() {
  return (
    <img
      src="/nothowstorygoes.dev/propic.jpg"
      alt="profile pic"
      className={styles.propic}
    />
  );
}
const Contacts = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap" className={styles.main}>
        <div className={styles.parentContainer}>
          <div className={styles.contactsContainer}>
            <Email
              info={{
                nome: "esposito.pioalessandro@gmail.com",
                ico: "/nothowstorygoes.dev/icons/gmail.png",
              }}
            />
            <Social
              info={{
                nome: "nothowstorygoes",
                url: "https://github.com/nothowstorygoes",
                ico: "/nothowstorygoes.dev/icons/github.png",
              }}
            />
            <Social
              info={{
                nome: "Pio Alessandro Esposito",
                url: "https://linkedin.it/in/pioalessandroesposito",
                ico: "/nothowstorygoes.dev/icons/linkedin.png",
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
