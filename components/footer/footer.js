import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return (        
        <footer className={styles.footer}>
            <div className={styles.ulFooter}>
                <div className={styles.liFooter}>
                    <div>
                        <h2 className={styles.h2Footer}>Mapa do site</h2>
                        <p><Link className={styles.linksheader} href="/">Home</Link></p>
                        <p><Link className={styles.linksheader} href="/lugares">Lugares</Link></p>
                        <p><Link className={styles.linksheader} href="/diario">Diário</Link></p>
                        <p><Link className={styles.linksheader} href="/comida">Comida</Link></p>
                    </div>
                </div>

                <div className={styles.liFooter}>
                    <div className={styles.sobre}>
                        <div className={styles.sobreEsquerda}>
                            <h2 className={styles.h2Footer}>Sobre o autor</h2>
                            <p><Link className={styles.linksheader} href="/sobre">Quem sou eu?</Link></p>
                            <p><Link className={styles.linksheader} href="/sobre#intercambio-do-rotary">Intercâmbio Rotary</Link></p>
                        </div>

                        <div className={styles.sobreDireita}>
                            <Image 
                                src="/images/rafa_nyhavn_sol_crop.jpg" 
                                alt="O autor em Nyhavn"
                                className={styles.avatar}
                                height={100}
                                width={100}
                                />
                            <p>Hejsa :)</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className={styles.txtFim}>Todos os direitos reservados Rafael Lindo © 2023</p>
        </footer>
    )
}