
import style from './style.module.scss'



export default function Summary() {

    return (

        <div className={style.resumo}>

            <div className={style.resumo_secundario}>
                <h1>Resumo</h1>
                <p>Perfil Profissional - Tudo sobre mim</p>

                <div aria-label="Ilustração de botões">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class={style.sub_resumo}>
                <h2 className={style.experiencia}> <i className="fa-solid fa-handshake"></i> EXPERIÊNCIA</h2>

                <div className={style.conteudo_experiencia}>

                    <div>
                        <span>2021 - Atual</span>
                        <h3>Atendimento de suporte de Nível 1 </h3>
                        <p>Registro, direcionamento e solução nos chamados
                            técnicos da fila por meio do sistema de gestão de
                            chamados
                            execução nos atendimentos técnicos por acesso
                            remoto, criação e apoio na atualização de base de
                            conhecimentos técnicos e/ou atendimento da
                            demanda
                        </p>
                    </div>
                    <div>
                        <span>2020-2021</span>

                        <h3>Técnico de Informática</h3>

                        <p>Realização de atendimento aos colaboradores dentro da
                            sua área de atuação.
                            Realização de manutenção corretiva e preventiva de
                            computadores, impressoras e rede da instituição.
                            Responsável pelo cuidado e manutenção dos
                            laboratórios de informática que são disponibilizados para
                            acesso dos alunos.
                        </p>
                    </div>
                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                    </ul>
                </div>
                <h2 classstyle={style.educacao}><i className="fa-solid fa-book"></i> Educação</h2>
                <div className={style.conteudo_educacao}>
                    <div>
                        <span>2017 - 2019</span>
                        <h3>Tecnólogo em Análise e desenvolvimento de sistemas</h3>
                        <p>Centro Universitário Jorge Amado</p>
                    </div>
                    <div>
                        <span>2022 - 2022</span>
                        <h3>Curso Intensivo de Desenvolvimento de Software - Fullstack</h3>
                        <p>Cubos Academy</p>
                    </div>
                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}