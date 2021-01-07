import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import "../../setupTests";

describe("Pruebas para GifGridItem", () => {
  const title = "titulo";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe mostar el componente correctamente (hacer match con un snapshot)", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const parrafo = wrapper.find("p");
    expect(parrafo.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // console.log(img.props()); devuelve obj con las props
    // console.log(img.prop(src));  devuelve valor de la prop que busco
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener animate__fadeInRight", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__fadeInRight")).toBe(true);

    //solucion de fernando
    const className = div.prop("className");
    expect(className.includes("animate__fadeInRight")).toBe(true);
  });
});
