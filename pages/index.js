import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.scss';
import utils from '../styles/utils.module.css';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className={styles.tudo}>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Aleo' rel='stylesheet'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap" rel="stylesheet"></link>
        <title>Danmark</title>
		    <meta charset="utf-8"/>
      </Head>

      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1><Link href="Home.html" className={styles.title}>DANMARK</Link></h1>
        </div>
        <div className={styles.menu}>
          <div className={utils.linksCabecalho}>
            <Link className={utils.linksheader} href="Home.html">HOME</Link>
            <span>    |   </span>
            <Link className={utils.linksheader} href="Lugares.html">LUGARES</Link>
            <span>    |   </span>
            <Link className={utils.linksheader} href="Sobre.html">DIÁRIO</Link>
            <span>    |   </span>
            <Link className={utils.linksheader} href="Comida.html">COMIDA</Link>
          </div>
        </div>
      </header>

      <div className={styles.fotonyhavn}>
      </div>

      <div className={styles.containerPrimeiroTexto}>
        <p className={styles.tituloMain}>O que é este belíssimo website?</p>
        <p className={styles.txtNormal}>Esta joia da programação foi-lhe trazida com o intuito de lhe apresentar um pouco sobre este grandioso (não de tamanho) país chamado Dinamarca, e algumas das mais loucas aventuras vivenciadas por ninguém mais ninguém menos que este carismático e bonito rapaz que lhe escreve neste momento!</p>
      </div>

      <div className={styles.containerMapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272025.443365064!2d9.299871488808352!3d56.21284926420115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDinamarca!5e0!3m2!1spt-PT!2sbr!4v1619061494291!5m2!1spt-PT!2sbr" 
          className={styles.mapa}
          allowFullScreen=""
          loading="lazy"></iframe> 
        <p className={styles.legendaMapa}>Caso você não saiba nem onde fica, ta ai um mapa!</p>
      </div>




      <div className={styles.containerImagens}>
        <p className={styles.tituloMain}>Mas o que têm de interessante neste minúsculo país?</p>

        <div className={styles.galeria}>
          <div className={styles.containerImgGaleria}>
            <img className={styles.imgGaleria}
              src="images/middelfart_kirke_cut.jpg"/>
            <p className={styles.legendaGaleria}>Tem igrejas bonitas</p>
          </div>

          <div className={styles.containerImgGaleria}>
            <img className={styles.imgGaleria}
              src="images/vaca_pelo_marrom.jpg"/>
            <p className={styles.legendaGaleria}>Tem vaquinha peluda</p>
          </div>

          <div className={styles.containerImgGaleria}>
            <img className={styles.imgGaleria}
              src="images/janta_restaurante.jpg"/>
            <p className={styles.legendaGaleria}>Tem comida gostosa</p>
          </div>
        </div>

        <p className={styles.tituloMain}> 
          E muito mais, que você pode descobrir aqui, neste belo website!
        </p>
      </div>

      <Footer/>

      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
