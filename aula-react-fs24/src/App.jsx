import Header from "./Header";
import CardIcon from "./CardIcon";
import Section from "./Section";
import "./style.css";
function App(){

  const culturas = [{
    titulo: "Missão",
    descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    titulo: "Valores",
    descricao: "Dorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    titulo: "Visão",
    descricao: "Porem, ipsum dolor sit amet consectetur adipisicing elit."
  },
];

const cursos = [{
  titulo: "Curso 1",
  descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
},
{
  titulo: "Curso 2",
  descricao: "Dorem, ipsum dolor sit amet consectetur adipisicing elit."
},
{
  titulo: "Curso 3",
  descricao: "Porem, ipsum dolor sit amet consectetur adipisicing elit."
},
];
  return( <>
    <Header/>
    <main>
      <Section titulo="Sobre">
        <div className="cards">
          {
          culturas.map((cultura) => (
            <CardIcon titulo={cultura.titulo} descricao={cultura.descricao} />
          ))
          }
        </div>
      </Section>
      <Section titulo="Cursos">
        
        <div className="cards">
          {
          cursos.map((curso) => (
            <CardIcon titulo={curso.titulo} descricao={curso.descricao} />
          ))
          }
        </div>
      </Section>
    </main>
    <footer>Eu sou o footer</footer>
   </>);
}

export default App;