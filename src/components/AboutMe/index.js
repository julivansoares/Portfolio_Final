import style from './style.module.scss'
import julivan from "../../../public/img/julivan_soares.png"
import Image from 'next/image'

export default function AboutMe() {

    return (
        <main className={style.puta}>
            <article aria-label="seção sobre min" className={style.sobre}>
                <div className={style.titulo}>
                    <h1>Sobre Mim</h1>
                    <p>Perfil Profissional - Tudo sobre mim</p>

                    <div aria-label="Ilustração de botões">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={style.fotoPefil}>
                    <Image className={style.img}  src={julivan} alt="foto-pefil" />
                </div>
                <div className={style.conteudo}>
                    <div className={style.texto}>
                        <p>
                            Ao longo da minha jornada como desenvolvedor, venho acumulando experiências enriquecedoras e conhecimentos sólidos na área de tecnologia da informação. Meu portfólio reflete meu comprometimento com a qualidade, criatividade e busca constante por aprimoramento.
                            Nele, você encontrará projetos em, aplicações web, todos desenvolvidos com paixão e dedicação. Minha habilidade em linguagens como Python, JavaScript, além de frameworks e bibliotecas populares, me permite criar soluções eficientes e escaláveis.
                            Ao navegar pelo meu portfólio, você terá uma visão abrangente do meu estilo de trabalho e das tecnologias com as quais estou familiarizado. Cada projeto é uma oportunidade de aprendizado e crescimento, buscando sempre superar desafios e alcançar resultados excepcionais.
                            Estou animado para compartilhar meu portfólio com você e demonstrar como minhas habilidades podem agregar valor aos projetos e equipes com as quais me envolvo. Sinta-se à vontade para explorar e conhecer melhor meu trabalho como desenvolvedor Full Stack.
                            Agradeço pela oportunidade de apresentar meu portfólio e estou ansioso para discutir como posso contribuir para o sucesso de novos projetos e iniciativas. Vamos juntos construir soluções inovadoras e impactantes no mundo da tecnologia!
                        </p>

                    </div>

                    <div class="sobre_info">
                        <p><i class="fa-solid fa-calendar-days"></i>Data de nascimento: 07 de maio de 1993</p>
                        <p><i class="fa-sharp fa-solid fa-laptop-code"></i>Autônomo: Disponível</p>
                        <p><i class="fa-solid fa-location-dot"></i>Endereço: Bahia, Brasil</p>
                        <p><i class="fa-solid fa-phone-volume"></i>Telefone: +55 71-994052920</p>
                        <p><i class="fa-solid fa-envelope"></i>E-mail: julivan.soares@outlook.com</p>
                    </div>

                </div>

            </article>
        </main>

    )
}