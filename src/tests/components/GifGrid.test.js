import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// con esto fingimos cualquier llamada a este archivo, a este customhook
// y suponer o controlar la informacion que este archivo va a responder
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas para <GifGrid />", () => {
  const category = "One Punch";

  test("debe de mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la category en el h3 del componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe(category);
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier prueba",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
