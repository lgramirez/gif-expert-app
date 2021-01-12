import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

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
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
