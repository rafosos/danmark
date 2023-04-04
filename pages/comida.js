import Title from "../components/title/title";
import utils from "../styles/utils.module.scss";
import styles from "../styles/comida.module.scss";
import Image from "next/image";

export default function Comida(){
    return(<><Title>Comida</Title>

    <div className={styles.hero_image}>
        <div className={styles.hero_container}>
            <p className={styles.hero_text}>Comida! Mad! Essen! Food!</p>
        </div>
    </div>

    <div className={styles.container}>
        <div className={styles.container_txt}>
            <p>
                Que forma melhor de conhecer uma cultura, senão pela sua comida? Para isso vim 
                aqui <span className={utils.riscado}>deixar você com vontade</span> te apresentar essa culinária
                deliciosa que é a dinamarquesa!
            <br/>
            <br/>
                A comida dinamarquesa é batata. Literalmente. No lugar do arroz e feijão, eles tem batata e molho. 
                Esse é o padrão para todas as refeições. Uma refeição típica dinamarquesa é batata, molho, carne e uma salada. 
                Simples e delicioso.
            <br/> 
            <br/>
                Mas como não só de batata vive o homem, outras variações de comida são adotadas com mais frequência do que o 
                brasileiro faz, como macarrão, pizza, ou as vezes, quando um sentimento mais latino aparece, nachos com queijo.
            <br/>
            <br/>
                Diferente do <span className={utils.gradienteBr}>Braza</span>, não é comum na Dinamarca ambos almoço e jantar 
                serem refeições quentes (ex. uma feijoada de almoço numa quarta-feira). Normalmente o almoço é um sanduíche, 
                algo mais leve, e a janta que é a refeição maior, que todo mundo come junto, etc.
            <br/>
            <br/>
                Em épocas de feriados, como o Natal <i>(Jul)</i> e na Páscoa <i>(Påske)</i>, existem também pratos típicos 
                específicos, que vou comentar com mais detalhe abaixo.
            </p>
        </div>
        <div className={styles.container_img_grande}>
            <div className={styles.container_margem}>
                <Image
                    src="/images/mad/frikadellerne-med-kartoffler.jpg"
                    className={styles.img_grande}
                    fill
                />
            </div>
        </div>

    </div>
    </>)
}

/* tópicos para abordar:
- kartoffel
- street food - kebab s2
*/