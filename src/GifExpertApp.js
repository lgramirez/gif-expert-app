import React, { useState } from "react";

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Good Doctor"]);
    // o podemos usar la otra forma de modificar el estado
    // donde recibimos como primer param el estado anterior y
    // devolvemos el nuevo estado
    // setCategories( cats => [...cats, 'Good Doctor'])
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
