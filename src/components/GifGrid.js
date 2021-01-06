import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, []);

  useEffect(() => {
    // esta forma es usado cuando el primer argumento de la funcion es
    // mandado como primer argumento a la otra funcion
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
