import Image from "next/image";
import styles from '/styles/lugares.module.scss';
import utils from '/styles/utils.module.scss';
import SjaellandOnMap from "../components/images/sjaellandOnMap";
import FynOnMap from '../components/images/fynOnMap';
import JyllandOnMap from '../components/images/jyllandOnMap';
import Link from "next/link";
import Title from "../components/title/title";

export default function Lugares(){
    return (<>
    <Title>Lugares</Title>
        
    <div className={styles.hero_image}>
        <div className={styles.hero_container}>
            <p className={styles.hero_text}>Lugares</p>
        </div>
    </div>

    <div className={styles.container_fundo_vermelho}>
        
        <div className={styles.texto_fundo_vermelho}>
            <h2 className={styles.titulo}>Geografia da Dinamarca</h2>
            <div className={styles.txt_geo}>
                <p className={styles.paragrafo_geo}> A Dinamarca é constituída de 406 ilhas (sem contar as ilhas Faroe e Groelândia, 
                    também território dinamarquês), sendo dessas 70 povoadas. Porém, as ilhas principais que vão ser faladas aqui, que também 
                    são as únicas que eu fui, são Jylland/Jutlândia, Fyn e Sjæland. Desde 1° de janeiro de 2007, a Dinamarca é dividida em 5 
                    regiões administrativas: Region NordJylland, Region MidtJylland, Region Syddanmark, Region Sjælland e Region Hovedstaden.
                </p>
                <p className={styles.paragrafo_geo}> Além da regiões, a Dinamarca também tem divisões menores, chamadas de municipalidades/municípios, 
                    ou kommune. São regiões que onde são agrupadas as pequenas vilas em bairros nas cidades maiores. Após a reforma de 2007, 
                    a Dinamarca tem 98 <span className={utils.italic}>kommuner</span>, com a maioria com população de no mínimo 
                    20.000 habitantes. A Groenlândia e as ilhas Faroé integram o Reino da Dinamarca, mas possuem autonomia interna 
                    e uma ampla margem de auto-governo. São representados por dois membros cada no parlamento dinamarquês.
                </p>
            </div>
        </div>
        
        <div className={styles.container_mapa_dk}>
            <Image 
                src="/images/dk-map-hvid.png" 
                className={styles.mapa_dk} 
                width={350} 
                height={300}
                layout="responsive"/>
            <p className={styles.legendaMapa}>Mapa da Dinamarca</p>
        </div>
    </div>

    <div className={styles.containerTudo}>

        {/* <div style={{backgroundColor: "#000"}}>
            <img src="/images/dk-map-hvid.png" usemap="#image-map" />

            <map name="image-map">
                <area target="" alt="jutland" title="jutland" href="" coords="188,249,216,250,231,227,236,191,194,179,205,96,212,26,191,15,113,90,47,107,13,187,12,242,16,321,39,348,47,400,66,413,93,421,177,409,156,378,140,374,145,358,138,341,135,323,149,308,174,289,185,273" shape="poly" />
                <area target="" alt="fyn" title="fyn" href="" coords="156,313,168,311,181,306,191,306,201,305,214,307,217,315,221,323,222,333,226,353,235,361,236,373,233,385,227,402,220,418,215,429,202,423,191,416,182,411,174,391,162,377,151,361,144,343,134,322,145,317" shape="poly" />
                <area target="" alt="sjealand" title="sjealand" href="" coords="367,313,364,303,357,238,324,235,302,251,251,251,250,277,217,292,232,328,245,369,270,379,278,391,235,394,228,425,274,448,315,447,341,407,355,384,330,367,353,353,342,324" shape="poly" />
            </map>
        </div> */}

        {/* <!--Jutlandia--> */}
        <div className={styles.conteudo_ilha}>
            <div className={styles.container_txt_ilha}>
                <h2 className={styles.titulo_ilha}>Jylland</h2>
                <hr/>
                <p>Jylland, ou Jutlândia no português e Jutland no inglês, é a única parte da Dinamarca que está ligada ao continente europeu por terra. 
                    A Jutlândia sozinha é maior que 2/3 do território dinamarquês em área com 29.777 km² e população de 2.646.702 habitantes. A Jutlândia 
                    é conhecida por ser uma parte mais rural do país, com mais fazendas e criações de animais, e foi numa dessas fazendas que tive o 
                    prazer de morar com minha primeira família.
                </p>

                <ul>
                    <li><Link href="">Skagen</Link></li>
                    <li><Link href="">Aalborg</Link></li>
                    <li><Link href="">Aarhus</Link></li>
                    <li><Link href="vejle">Vejle</Link></li>
                    <li><Link href="">Jelling</Link></li>
                    <li><Link href="">Billund</Link></li>
                    <li><Link href="">Esbjerg</Link></li>
                </ul>
            </div>

            <div className={styles.ilha_mapa}>
                    <JyllandOnMap className={styles.imagem_mapa_ilha}/>
                    <p className={styles.legenda}>Foto: Wikipédia</p>
            </div>
        </div>

        {/* <!--Fyn--> */}
        <div className={styles.conteudo_ilha}>
            <div className={styles.container_txt_ilha}>
                <h2 className={styles.titulo_ilha}>Fyn</h2>
                <hr/>
                <p> Fyn (Fiônia ou Fiónia no português, bem ridiculo, me recuso a usar) é a ilha do meio, localizada entre a Jutlândia 
                    e Sjælland. É a terceira maior ilha da Dinamarca com área de 3.099 km² e população de 470.880 habitantes. 
                    Como mostrado no mapa acima, Fyn faz parte da Region Syddanmark, e para evitar ser redundante colocando o mesmo 
                    mapa novamente, vou colocar aqui do lado um mapa só com a ilha em vermelho.
                </p>
                <ul>
                    <li><Link href="odense">Odense</Link></li>
                    <li><Link href="middelfart">Middelfart</Link></li>
                </ul>
            </div>
            <div className={styles.ilha_mapa}>
                <FynOnMap className={styles.imagem_mapa_ilha}/>
                <p className={styles.legenda}>Foto: Wikipédia</p>
            </div>
        </div>

        {/* <!--Sjælland--> */}
        <div className={styles.conteudo_ilha}>
            <div className={styles.container_txt_ilha}>
                <h2 className={styles.titulo_ilha}>Sjælland</h2>
                <hr/>
                <p> Sjælland (Zelândia no português, não vou usar pra não confundir com Nova Zelândia, outra coisa completamente diferente), 
                    também conhecida como "ilha de Copenhague", é, como o apelido sugere, a ilha onde fica localizada a capital da Dinamarca,
                    a cidade de Copenhague. É a maior ilha da Dinamarca em tamanho (excluindo Groelandia) e população. Se conecta a Fyn por
                    uma ponte chamada Storebælt (grande cinto), e de outro lado se conecta a Suécia pelo Estreito de Øresund.
                </p>
                <ul>
                    <li><Link href="koebenhavn">København</Link></li>
                </ul>
            </div>
            <div className={styles.ilha_mapa}>
                <SjaellandOnMap className={styles.imagem_mapa_ilha}/>
                <p className={styles.legenda}>Foto: Wikipédia</p>
            </div>
        </div>
    
    </div>
    </>)
}
