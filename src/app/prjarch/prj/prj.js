import styles from '../../css/prjarch.module.css'
import Image from 'next/image'

export default function Project({content}){
    return(
        <div className={styles.prjBox}>
            <div className={styles.prjTextBox}>
                <p className={styles.prjText}>
                    {content.text}
                </p>
            </div>
            <a href={content.url}>
            <div className={styles.prjImg}>
                <Image src={content.img} alt="" width={1000} height={500} className={styles.prjImg}/>
            </div>
            </a>
        </div> 
    )
}