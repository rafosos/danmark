import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../styles/sobre.module.scss';
import utils from '../styles/utils.module.scss';
import Image from 'next/image';
import InstaIcon from '../components/images/instaIcon';
import Link from 'next/link';
import GmailIcon from '../components/images/gmailIcon';
import Head from 'next/head';

export default function Sobre(){

    return(<>
    <Head>
        <title>Sobre | Danmark med Rafa</title>
    </Head>
    <Header/>

    <div className={styles.hero_image}>
        <div className={styles.hero_container}>
            <p className={styles.hero_text}>Quem sou eu?</p>
        </div>
    </div>

    <div className={styles.container_txt_sobre}>
        <div className={styles.container_txts}>
            <p>
                Hejsa! Eu sou o Rafael, mas você pode me chamar de Rafa, e eu sou o autor desta maravilha da tecnologia (desse website) 
                que você está acessando. Sou de Votorantim, uma cidade no interior de São Paulo, e por meio do Programa de Intercâmbio 
                de Jovens do Rotary, eu morei na Dinamarca por 11 meses, de Agosto/2019 até Julho/2020, experiência que mudou minha vida 
                e me fez me apaixonar por esse país.
            </p>
            <br/>
            <p>
                Sou um estudante de programação, e ainda com saudade do meu intercâmbio decidi juntar os dois, e foi assim que nasceu a 
                ideia de fazer essa tesouro da computação, com o intuito de registrar na internet um pouco desse ano mais doido da minha 
                vida, ou melhor, essa outra vida doida que vivi em um ano.
            </p>
            <br/>
            <p>
                Espero que por meio deste esforço eu consiga fazer com que você, querido(a) leitor(a), possa compartilhar comigo um pouco do que 
                foi essa experiência maluca, e, sendo mais otimista, te inspirar a se arriscar a visitar esse país que fala língua estranha
                (dinamarquês, não oudri kandralahai), e não somente isso, mas te motivar a, assim como eu, se jogar de cabeça numa aventura
                como essa, porque eu te garanto, vale a pena.
            </p>
            <br/>
            <p>
                Então, sinta-se em casa! Viaje por todos os cantos desta jóia digital! E caso queira entrar em contato comigo, aqui estão minhas
                informações:
            </p>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Link className={utils.links} href="https://www.instagram.com/rafalrf_/">
                    <div className={styles.containerContato}>
                        <InstaIcon className={styles.icone} />
                        <p>@rafalrf_</p>
                    </div>
                </Link>
                <Link className={utils.links} href="mailto:rafael.lrfrancisco@gmail.com">
                    <div className={styles.containerContato}>
                        <GmailIcon className={styles.icone} />
                        <p>rafael.lrfrancisco@gmail.com</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className={styles.container_img_grande}>
            <div className={styles.container_margem}>
                <Image
                    src="/images/rafa_nyhavn_sol.jpg"
                    className={styles.img_nyhavn}
                    fill
                />
            </div>
        </div>
    </div>

    <Footer />
    </>)
}