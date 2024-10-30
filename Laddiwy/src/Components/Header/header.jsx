
import logo from "../../img/logo.png";
import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.listHeader}>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Favoritos</a>
        </li>

        <li>
          <a href="#">Login</a>
        </li>

        <li>
          <div className={styles.searchBar}>
            <MagnifyingGlass size={20} className={styles.icon} />
            <input
              type="text"
              placeholder="Procure seus concursos"
              className={styles.input}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
=======

import "./header.module.css"
import logo from "../../img/logo.png"


export function Header(){

    return(

        <div className="container">

           <div className="imagem">

            <img src={logo} alt="logo" />

           </div>
           {/* <button><img src={rj} alt="rj" /></button>
         */}
           
        
        <ul className="list-header">
           
                <li><a className="list-header"  href="#">Home</a></li>
           
                <li><a className="list-header" href="#">Favoritos</a></li>
            
                <li><a className="list-header" href="#">Login</a></li>
            
        

            </ul>
                
                <div className="search">
                    <input  type="text" placeholder="Pesquise seu concurso" /> 
                    <button><img className="lupaLogo" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="lupa" /> </button>
                </div>
           
           
       


        </div>




    );





}
