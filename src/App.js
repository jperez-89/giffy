import "./App.css";
import ListOfGif from "./component/listOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <button type="button">Cambiar Gif</button>
        <ListOfGif keyword={"gato"} />
        {/* Se puede usar tambien
           ListOfGif(gifs)
        */}
      </section>
    </div>
  );
}

export default App;
