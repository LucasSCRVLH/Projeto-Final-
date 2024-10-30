
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