import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sale from "../../images/Catalogo_resinando.PNG";
import setas from "../../images/seta.png";
import teste from "../../images/teste.jpg";
import "./Card.css";



export function Card() {
    const [produtos, setProdutos] = useState ([])
    const carousel = useRef(null)

    useEffect (() => {
        async function fetchProdutos() {
            const response = await axios.get("http://localhost:7000/");

            setProdutos(response.data)
        };
        fetchProdutos()
    },[]);

    const handleLeftBtn = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    }
    const handleRightBtn = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;

    }

    return(
        
        <div>   
           <div className="card1">
                    <img src={teste} alt="new colection" className="cardSale"></img>
            </div>
            <section className="section">
               <div className="container">
                 <div className="carousel" ref={carousel}>
                    {produtos.map((item) => {   
                    const {title, image, id, price} = item;
                      
                    return(
                
                    <div className="item" key={id}>
                        <Link to={`/filteredHome`}>
                            <div className="image"> 
                                <img src={image} alt={title} ></img> 
                            </div> </Link>
                    
                        <div className="info">

                           <Link to="/cadastro" > <span className="price">$ {price} </span> </Link>
                        </div>
                    </div>
                    
                        
                    )
                    })} 
                 </div>
                 <div className="buttons">
                     <button onClick={handleLeftBtn}><img src={setas} alt="Scrool Left" className="setas"/></button>
                     <button onClick={handleRightBtn}><img src={setas} alt="Scrool Rigth"  className="setas"/></button>
                 </div>
               </div>
               <div className="card2">
                    <img src={sale} alt="Card Promo" className="cardPromo"></img>
                </div>
               
            </section>
           
             
        </div>
    )
}