import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGif({ keyword }) {
  //? Estado para almacenar los GIFs obtenidos de la API, inicializado como un array vacío.
  const [gifs, setGifs] = useState([]);

  //? Efecto que se ejecuta al montar el componente, osea se ejecuta cuando el componente se renderiza por primera vez.
  useEffect(
    function () {
      //? Llamada a la API para obtener los GIFs
      getGifs({ keyword })
        .then((gifs) => {
          //? Actualiza el estado con los GIFs obtenidos
          setGifs(gifs);
        })
        .catch((error) => {
          console.error("Error fetching GIFs:", error);
        });
    },
    //? Efecto con dependencias (se ejecuta solo una vez al montar el componente).
    [keyword]
  );

  return gifs.map(({ id, title, url }) => (
    //? Renderiza cada GIF utilizando el componente Gif, pasando las propiedades id, title y url.
    <Gif id={id} key={id} title={title} url={url} />
  ));
}
