import styles from '../styles/index.module.scss';
import Title from '../components/title/title';

export default function Home() {
  return (
    <div className={styles.tudo}>
      <Title>Home</Title>

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
              src="images/mad/janta_restaurante.jpg"/>
            <p className={styles.legendaGaleria}>Tem comida gostosa</p>
          </div>
        </div>

        <p className={styles.tituloMain}> 
          E muito mais, que você pode descobrir aqui, neste belo website!
        </p>
      </div>
    </div>
  )
}
