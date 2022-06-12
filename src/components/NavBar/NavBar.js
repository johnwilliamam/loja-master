import { Link, useNavigate } from "react-router-dom";
import logo2 from "../../images/logo2.png";
import lupa from "../../images/lupa.png";
import "./NavBar.css";

export function NavBar(props) {
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        navigate("/filtredHome")
    }
    
    
    return ( 
        <nav className="NavBar">
            <Link to="/"><img src={logo2} alt="logo" className="logo"></img></Link>
            <div>   
                <div className="SearchBar">
                
                <form className="FormSearchBar" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="SearchBar"   
                        placeholder= "Buscar produtos"
                        onKeyUp={(e) => {props.filterState(e.target.value)
                        }}

                        
                    />
                    <button className="button"><img src={lupa} alt="lupa" className="lupa"></img></button>
                </form>  
                </div>      
            </div>   
        </nav>
    
     );
}

