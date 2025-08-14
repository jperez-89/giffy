import React, { useState } from "react";
import "./App.css";
import ListOfGif from "./component/listOfGifs";

function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword("cerdo")} type="button">
          Cambiar Gif
        </button>

        {/* Renderiza el componente ListOfGif pasando la palabra clave "gallina" como prop */}
        <ListOfGif keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
