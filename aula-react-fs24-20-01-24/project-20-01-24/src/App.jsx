import { useState } from "react";

function App(){
  const [texto, setTexto] = useState("Hello word");
  const [idade, setIdade] = useState(0);

  function alterarTexto(evento){
    setTexto(evento.target.value);
  }

  function mudarIdade(){
    setIdade(18);
  }
  
  return(
    <div>
      <h1>{texto}</h1>
      <h1>{idade}</h1>
      <input type="text" onChange={alterarTexto}/>
      <button onClick={mudarIdade}>Mudar idade</button>
    </div>
  );
}

export default App;