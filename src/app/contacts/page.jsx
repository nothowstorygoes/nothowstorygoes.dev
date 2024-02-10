"use client";
import React from "react";
import Sidebar from "../components/menuburger";
import styles from "../css/page.module.css";
import Image from "next/image";
import { useRouter} from "next/router";

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

function Email({info})
{
  let name = info.nome;
  let ico = info.ico;
  return(
  <div className={styles.contactItem}>
      <a onClick={() => router.push('mailto:esposito.pioalessandro@gmail.com')}>
      <Image src={ico} className={styles.contactImg} alt=""/>
      </a>
      <p className={styles.contactText}> {name}</p>
    </div>
  )
}

function ProPic() {
  return <Image src="/nothowstorygoes.dev/propic.jpg" alt="profile pic" className={styles.propic} />;
}
const Contacts = () => {
  return (
    <div id="outer-container">
      <Sidebar />
      <main id="page-wrap">
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
                url: "NULL",
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