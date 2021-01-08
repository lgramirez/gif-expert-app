import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas para <AddCategory />", () => {
  // crea una funcion simulada nueva y sin uso
  const setCategories = jest.fn();

  // hacemos una doble inicializacion para tener las ayudas para wrapper
  // por ejm wrapper.find()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    // limpia todas las simulaciones, especialmente para la funcion que creamos
    // de setCategories
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });

    // para hacer este expect tuvimos que añadir un parrafo <p></p>
    // al componente, actualizar el snapshot y comprobar que el
    // parrafo se actualice con el valor del valor que cambiamos en el input
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la informacion con submit", () => {
    // creamos la funcion preventDefault de una manera corta
    // sino tambien podria ser preventDefault: () => {}
    // cualquier cosa revisar como crear un metodo de un objeto js
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // con el metodo haveBeenCalled preguntamos si la funcion simulada
    // creada por jest fue ejecutada
    expect(setCategories).not.toHaveBeenCalled();
  });

  // tarea
  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo cruel";

    // 1. simular el inputChange
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    // 2. simular el submit
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: () => {} });

    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();

    // 4. el valor del input debe de estar ''
    expect(input.prop("value")).toBe("");
  });
});
