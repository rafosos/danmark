import Title from "../components/title/title";
import utils from "../styles/utils.module.scss";
import styles from "../styles/comida.module.scss";

export default function Comida(){
    return(<><Title>Comida</Title>

    <div className={styles.hero_image}>
        <div className={styles.hero_container}>
            <p className={styles.hero_text}>Comida! Mad! Essen! Food!</p>
        </div>
    </div>

    <div className={styles.container}>
        <p>
            Que forma melhor de conhecer uma cultura, senão pela sua comida? Para isso vim 
            aqui <span className={utils.riscado}>deixar você com vontade</span> te apresentar essa culinária
            deliciosa que é a dinamarquesa!
        </p>
        <br/>
        <p>
            E esse é um assunto que posso falar com um pouco de propriedade sobre, porque se teve uma coisa que 
            eu fiz, e fiz com gosto lá, foi comer. A comida dinamarquesa é batata. Literalmente. No lugar do arroz 
            e feijão, eles tem batata e molho. Esse é o padrão para todas as refeições. Uma refeição típica dinamarquesa
            é batata, molho, carne e uma salada. Simples e delicioso.
        </p>
        <br/>
        <p>
            Mas como não só de batata vive o homem, outras variações de comida são adotadas com mais frequência do que o 
            brasileiro faz, como macarrão, pizza, ou as vezes, quando um sentimento mais internacional aparece, nachos com queijo.
        </p>
    
    </div>
    </>)
}

/* tópicos para abordar:
- kartoffel
- street food - kebab s2
*/