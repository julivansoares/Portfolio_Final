import style from "./style.module.scss"
import { BsGithub, BsLinkedin } from 'react-icons/bs' ; 
export default function Home(){

    return(
        
    <section className={style.home}>
       
       <div className={style.subHome}>
       <h2>Olá sou</h2>
       <h2 className={style.digitando}>Desenvolvedor Full Stack</h2>
       <p>
         Sou uma pessoa dedicada e comprometida com as atividades atribuídas a mim.
         Busco dar continuidade a minha carreira profissional com intuito de
         atuar como desenvolvedor Fullstack
       </p>
 
       <div className={style.redes}>
         <div className={style.subRedes}>
           <a href="https://github.com/julivansoares" target="_blank">
             <BsGithub alt="gjgjng" className={style.van}/>
           </a>
 
           <a href="https://www.linkedin.com/in/julivan-soares/" target="_blank">
             <BsLinkedin alt="icone-Linkedin"/>
           </a>
         </div>
         <a href="/Curriculum/JULIVAN_SOARES.pdf" download className={style.download}>Download CV</a>
       </div>
 
 
     </div>
     <div class="foto-pefil">
       <img src="./img/Julivan_soares.png"  alt="foto-pefil" />
     </div>
   </section>
       





    )
}