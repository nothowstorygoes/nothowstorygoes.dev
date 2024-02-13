"use client";
import { Typewriter } from "react-simple-typewriter";
import styles from "../css/offline.module.css";
import Image from "next/image";

export default function Offline() {
  return (
    <main>
      <div className={styles.container}>
        <Typewriter
          words={["Looks like you're offline.."]}
          typeSpeed={70}
        ></Typewriter>
      </div>
      <Image
        src="/nothowstorygoes.dev/fallback.png"
        alt="No internet"
        className={styles.image}
      ></Image>
    </main>
  );
}
