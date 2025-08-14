import "./App.css";
import ListOfGif from "./component/listOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <button type="button">Cambiar Gif</button>
        {/* Renderiza el componente ListOfGif pasando la palabra clave "gallina" como prop */}
        <ListOfGif keyword={"gallina"} />
      </section>
    </div>
  );
}

export default App;
