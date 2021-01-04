import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Good Doctor"]);
  //   // o podemos usar la otra forma de modificar el estado
  //   // donde recibimos como primer param el estado anterior y
  //   // devolvemos el nuevo estado
  //   // setCategories( cats => [...cats, 'Good Doctor'])
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
