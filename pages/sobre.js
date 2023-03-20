import styles from '../styles/sobre.module.scss';
import utils from '../styles/utils.module.scss';
import Image from 'next/image';
import InstaIcon from '../components/images/instaIcon';
import Internet from '../components/images/internet';
import Link from 'next/link';
import GmailIcon from '../components/images/gmailIcon';
import Title from '../components/title/title';

export default function Sobre(){

    return(<>
    <Title>Sobre</Title>

    <div className={styles.hero_image_top}>
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

    <div className={styles.hero_image_bottom} id="intercambio-do-rotary">
        <div className={styles.hero_container_bottom}>
            <p className={styles.hero_text}>Intercâmbio do Rotary</p>
        </div>
    </div>

    <div className={styles.container_txt_sobre}>
        <div className={styles.container_txts}>
        <figure className={utils.quote}>
            <blockquote>
                “Você nunca vai se sentir completamente em casa novamente, porque parte do seu coração sempre estará em outro lugar. 
                Este é o preço que se paga pela riqueza de amar e conhecer pessoas em mais de um lugar.”
            </blockquote>
            <figcaption className={utils.quote_autor}>
                <cite>&mdash; Miriam Adeney</cite>
            </figcaption>
        </figure>
            <br/>
            <p>
                É isso que o intercâmbio faz com a gente. Ele nos divide em pedaços, e cada pessoa que conhecemos, cada lugar novo
                que visitamos, cada canto novo que amamos, tudo ganha um pedaço nosso. Dessa forma, nunca mais seremos inteiros, mas sim,
                divididos pelo mundo. 
            </p>
            <br/>
            <p>    
                E da mesma forma que me dou, levo comigo um pedaço de cada um daqueles que conheci, de cada lugar que visitei, 
                de cada riso, piada, conversa, abraço, beijo, amor que compartilhei. Levo tudo comigo. O peso de tudo isso é
                a saudade, as vezes ela pesa de mais e dói o peito, as vezes é leve que quase não sinto, e o que dá força
                para carregar esse peso é a esperança, a esperança de poder visitar de novo, a esperança de um reencontro,
                do reencontro, com o objeto amado, e com aquela parte de mim que foi pra longe.
            </p>
            <br/>
            <p>
                O intercâmbio foi a melhor experiência da minha vida, e espero que possa um dia ser da sua também! 
                O Rotary possui programas de longa e curta duração, e cada ano as vagas são para lugares diferentes. 
                O intercâmbio do Rotary não é de turismo e nem estudantil, é cultural! Você, como intercâmbista do Rotary, 
                tem como responsabilidade representar nosso país lá fora como um Embaixador da Paz, promovendo e 
                participando de ações socias (se possível) e fazendo o melhor para levar nossa cultura para o país de 
                destino, e depois trazer a cultura de fora para nosso país, promovendo mútuo entendimento e criando laços 
                entre as nações. Saiba mais no site oficial e no instagram do programa do meu distrito, o 4621:
            </p>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Link className={utils.links} href="https://www.rotary.org/pt/our-programs/youth-exchanges">
                    <div className={styles.containerContato}>
                        <Internet style={{transform: "scale(1.3)"}}/>
                        <p>rotary.org</p>
                    </div>
                </Link>
                <Link className={utils.links} href="https://www.instagram.com/pij.d.4621/">
                    <div className={styles.containerContato}>
                        <InstaIcon className={styles.icone} />
                        <p>@pij.d.4621</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className={styles.container_img_grande}>
            <div className={styles.container_margem}>
                <Image
                    src="/images/odense-feelings-geral.jpg"
                    className={styles.img_nyhavn}
                    fill
                />
            </div>
        </div>
    </div>
   </>)
}