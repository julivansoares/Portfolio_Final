import style from './style.module.scss'


export default function AboutMe(){

    return(
        <main className={style.main}>
            <article className={style.sobre}>
                <div class="titulo">
                    <h1>Sobre Mim</h1>
                    <p>Perfil Profissional - Tudo sobre mim</p>

                    <div aria-label="Ilustração de botões">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={style.foto_pefil}>
                  <img src="./public/img/Julivan_soares.png" alt="foto-pefil"></img>
                </div>                
         </article>
        </main>
  
    )
}