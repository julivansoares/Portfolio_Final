import style from "./style.module.scss"
import 'animate.css';
import {AiOutlineMenu} from 'react-icons/ai';

export default  function Nav(){
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <h1 className={`${style.nome} animate__animated  animate__pulse` }  > Julivan Soares</h1>
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
          <span>
           <AiOutlineMenu/>
           </span>
        </nav>
        

      
      </header>

      
    );
}


