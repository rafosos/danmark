import Link from "next/link";
import styles from './header.module.scss';

export default function Header(){
    return (
    <header className={styles.header}>
        <div className={styles.titleContainer}>
        <h1><Link href="/" className={styles.title}>DANMARK</Link></h1>
        </div>
        <div className={styles.menu}>
            <div className={styles.linksCabecalho}>
                <Link className={styles.linksheader} href="/">HOME</Link>
                <span>    |   </span>
                <Link className={styles.linksheader} href="/lugares">LUGARES</Link>
                <span>    |   </span>
                <Link className={styles.linksheader} href="Sobre.html">DIÁRIO</Link>
                <span>    |   </span>
                <Link className={styles.linksheader} href="Comida.html">COMIDA</Link>
            </div>
        </div>
    </header>
  )
}