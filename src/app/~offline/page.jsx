'use client'
import useTypeWriter from '../components/typewriter';
import styles from '../css/offline.module.css';
import Image from 'next/image';

export default function Offline()
{
    const tw= useTypeWriter("Looks like you're offline.. ");
    return(
        <main>
            <pre className={styles.containerText}>{tw}</pre>
            <Image src="/nothowstorygoes.dev/fallback.png" alt="No internet" className={styles.image}></Image>
        </main>
    );
}