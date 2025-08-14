import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGif({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      //? Llamada a la API para obtener los GIFs
      getGifs({ keyword })
        .then((gifs) => {
          setGifs(gifs);
        })
        .catch((error) => {
          console.error("Error fetching GIFs:", error);
        });
    },
    //Efecto con dependencias (se ejecuta solo una vez al montar el componente).
    [keyword]
  );

  return gifs.map(({ id, title, url }) => (
    <Gif id={id} key={id} title={title} url={url} />
  ));
}
