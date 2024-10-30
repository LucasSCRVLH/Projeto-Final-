
import "./header.css"
import logo from "../../img/logo.png"

export function Header(){

    return(

        <div className="container">

           <div className="imagem">

            <img src={logo} alt="logo" />

           </div>
        
           
        
        <ul className="list-header">
           
                <li><a className="list-header"  href="#">Home</a></li>
           
                <li><a className="list-header" href="#">Favoritos</a></li>
            
                <li><a className="list-header" href="#">Login</a></li>
            
            <li> 
                <input  type="text" placeholder="Pesquise seu concurso" /> 
                <img className="lupaLogo" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="lupa" />
            </li>
           
        </ul>


        </div>




    );





}