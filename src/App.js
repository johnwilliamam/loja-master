import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Cadastro } from "./components/NavBar/Cadastro/Cadastro";
import { Login } from './components/NavBar/Login/Login';
import { NavBar } from './components/NavBar/NavBar';
import { FiltredHome } from './pages/FilteredHome/FilteredHome';
import { Home } from "./pages/Home/Home";
import { Perfil } from './pages/Perfil/Perfil';
import { UserPage } from './pages/UserPage/UserPage';

function App() {
  const [itens, setItens] = useState([])
  const [backUp, setBackUp] = useState([...itens])

  useEffect(() => {
    async function getItens(){
      const response = await axios.get('http://localhost:7000/');
      setItens(response.data);
      setBackUp(response.data);
    }
    getItens()
  }, [])

  console.log(itens)
  function filterItems(filterParams){
    if (filterParams === ""){
      setItens(backUp);
      return;
    }
    const filtred = itens.filter((currentItem) => {
      return (currentItem.title || currentItem.description || currentItem.category)
      .toLowerCase()
      .includes(filterParams.toLowerCase());
    });
    setItens(filtred)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar filterState={filterItems}/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/filtredHome' element={<FiltredHome itens={itens}/>}/>
            <Route path='/userpage/:id' element={<UserPage itens={itens} />} />
            <Route path='/perfil/:id' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
