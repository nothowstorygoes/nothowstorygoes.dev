import useTypeWriter from './components/typewriter';
import styles from './css/offline.module.css';

const tw= useTypeWriter("Looks like you're offline.. ");

export default Offline()
{
    return(
        <main className={styles.offline}>
            <pre>{tw}</pre>
            <Image src="/nothowstorygoes.dev/fallback.webp"></Image>
        </main>
    )
}