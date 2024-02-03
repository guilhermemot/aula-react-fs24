import { useState } from 'react'
import Home from "./components/Home"
import Contatos from "./components/Contatos"
import Sobre from "./components/Sobre"
import './App.css'

function App() {
  const [paginaAtual, setPaginaAtual] = useState("home")


  function renderizarCondicional(paginaAtual) {


    switch (paginaAtual) {
      case "home":
        return <Home/>

      case "contatos":
        return <Contatos/>

      case "sobre":
        return <Sobre/>

      default:
        break;
    }
 

  }



  return (
    <>
        <button onClick={() => setPaginaAtual("home")}>
          Home
        </button>
        <button onClick={() => setPaginaAtual("contatos")}>
          Contatos
        </button>
        <button onClick={() => setPaginaAtual("sobre")}>
          Sobre
        </button>

        {renderizarCondicional(paginaAtual)}
    </>
  )
}

export default App
