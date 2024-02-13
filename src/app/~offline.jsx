import useTypeWriter from './components/typewriter';
import styles from './css/offline.module.css';
import Image from 'next/image';

export default function Offline()
{
    const tw= useTypeWriter("Looks like you're offline.. ");
    return(
        <main className={styles.offline}>
            <pre>{tw}</pre>
            <Image src="/nothowstorygoes.dev/fallback.webp"></Image>
        </main>
    );
}