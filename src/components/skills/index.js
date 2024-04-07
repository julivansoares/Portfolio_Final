
import style from './style.module.scss'
import Image from "next/image";
import JavaScript from "../../../public/img/Javascript.png"
import Python from "../../../public/img/python.png"
import NodeJS from "../../../public/img/nodejs.png"
import React from "../../../public/img/react.png"
import Html5 from "../../../public/img/html5.png"
import Postgresql from "../../../public/img/postgres.png"
import Mysql from "../../../public/img/Mysql.png"
import Sqlserver from "../../../public/img/sql-server.png"
//import Linux from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
import Github from   "../../../public/img/github1.png"


export default function Skills() {

    return (

        <main className={style.sevicos}>
            <div className={style.titulo_secundario}>
                <h1>Tecnologias</h1>
                <p>Perfil Profissional - Tudo sobre mim</p>

                <div aria-label="Ilustração de botões">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={style.sub_resumo}>

                </div>
            </div>

            <div className={style.menu_servicos}>
                <ul aria-label="Navegação secundaria">

                    <li>
                        <Image src={ JavaScript } />
                            <h3>Javascript</h3>
                    </li>
                    <li>
                        <Image src={Python} />
                        <h3>Python</h3>
                    </li>
                    <li>
                        <Image src={NodeJS} />
                        <h3>NodeJS</h3>
                    </li>


                    <li>
                        <Image src={React} />
                            <h3>React</h3>
                    </li>
                    <li>
                        <Image src={Html5} />
                            <h3>Html5</h3>
                    </li>
                    <li>
                        <Image src={Html5} />
                            <h3>Css3</h3>
                    </li>


                    <li>
                        
                        <Image src={Postgresql} />
                            <h3>Postgresql</h3>
                    </li>

                    <li>
                        <Image src={Mysql} />
                            <h3>Mysql</h3>
                    </li>

                    <li>
                        <Image src={Sqlserver} />
                            <h3>Sqlserver</h3>
                    </li>

                    <li>
                        <Image src={Linux} />
                        
                        <h3>Linux</h3>
                    </li>

                    <li>

                        <Image src={Github} />
                        <h3>Github</h3>
                    </li>
                </ul>
            </div>
        </main>

    )
}