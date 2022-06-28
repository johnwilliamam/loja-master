import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./UserPage.css";


export function UserPage(props) {
    const params = useParams();
    const [login, setLogin] = useState([]);
    const [meuCarrinho, setMeuCarrinho] = useState([])

    useEffect (() => {
        async function fetchUser(){
            const response = await axios.get(`https://localhost:7000/${params.id}`
            );
            setLogin(response.data)
            setMeuCarrinho(response.data.carrinho)
        }
        fetchUser();
    }, [params.id])

    function handleRemoveItem(index) {
        const cloneItem = [...meuCarrinho];
        cloneItem.splice(index, 1);
        axios.put(`https://localhost:7000/${params.id}`, {carrinho: cloneItem })
    
        setMeuCarrinho(cloneItem);
      }
      function enviarMensagem(meuCarrinho){
       const descricao = meuCarrinho.map((item) => {   
            const {description} = item;
              console.log(item)
              console.log(description)
            return description
        })
        var descricaoFormat = `Olá! \n Quero um chaveiro com os seguintes adereços: \n ${descricao}`
        descricaoFormat = window.encodeURIComponent(descricaoFormat)
        window.open(`https://wa.me/5585986604380?text=${descricaoFormat}`)
    }
    const totalPrice = [0]
    for(let i = 0; i < meuCarrinho.length; i++){
        totalPrice.push(meuCarrinho[i].price)
        console.log(totalPrice)
    }

    const totalPriceSum = totalPrice.reduce(function(acumulador, proximoItem){
        return acumulador + proximoItem
    })
    console.log(totalPriceSum)

    let pronome = ""

    if (login.genero === "Feminino"){
        pronome += "Bem vinda"
    } else if (login.genero === "Masculino"){
        pronome += "Bem vindo"
    } else {
        pronome += "Bem vinde"
    }
    
    return ( 
        <div className="userPage">
            <div>
                <h1>{pronome}, {login.name}!</h1>
                <Link to="/"><button className="btnCad">Sair</button></Link>
                <Link to={`/perfil/${params.id}`}><button className="btnCad">Perfil</button></Link>

            </div>
            <div className="todos">
                <div className="loja">
                {props.itens.map((currentProduto) => {
                    return (
                        <article className="iten">
                            <article className="product">
                                <h1 className="productTitle">{currentProduto.title}</h1>
                                <img src={currentProduto.image} alt={currentProduto.title} className="productImg"/>
                                <p> Preço: ${currentProduto.price}</p>
                                <button className="btnCad" onClick={(event)=> {                           
                                    setMeuCarrinho([...meuCarrinho, currentProduto])
                                    axios.put(`https://localhost:7000/${params.id}`, {carrinho: meuCarrinho })}}> Comprar </button>
                            </article>
                        </article>
                    );
                    
                })}; 
                </div>
                <ul className="carrinho">
                    <h3>Seu Carrinho:</h3>
                    {meuCarrinho.map((currentProduto, index) => {
                        return (
                            <>
                                <li className="list">
                                    <div className="boxCarrinho">
                                        <h5>{currentProduto.title}</h5>
                                        <img className="carrinhoImg" src={currentProduto.image} alt={currentProduto.title} />
                                    </div>
                                    <p>Preço: R${currentProduto.price}</p>
                                    <button className="Button" onClick={() => {handleRemoveItem(index)
                                    }}>Remover</button>
                                </li>
                            </>
                        )
                    })}
                    <button className="Button" onClick={() => {enviarMensagem(meuCarrinho)
                        }}>Comprar</button>
                    <h3>Valor Total: R${totalPriceSum}</h3>
                </ul> 
            </div>                          
        </div>
    );
};
