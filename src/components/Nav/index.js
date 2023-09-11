import style from "./style.module.scss"
import 'animate.css';
export default  function Nav(){
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <h1 className={style.nome}  > Julivan Soares</h1>
          <h1  className="animate__animated  animate__pulse" style={{color:'red'}}> Julivan Soares</h1>
          <ul>
            <li className="animate__animated  animate__pulse">
              <a href="#home" >Home</a>
          
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#resume">Resumo</a>
            </li>
            <li>
              <a href="#portifolio">Portifolio </a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
        

      
      </header>

      
    );
}


