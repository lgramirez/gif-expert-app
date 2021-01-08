import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas para <AddCategory />", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });

    // para hacer este expect tuvimos que añadir un parrafo <p></p>
    // al componente, actualizar el snapshot y comprobar que el
    // parrafo se actualice con el valor del valor que cambiamos en el input
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
