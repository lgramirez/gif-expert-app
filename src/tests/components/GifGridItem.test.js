import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import "../../setupTests";

describe("Pruebas para GifGridItem", () => {
  const title = "titulo";
  const url = "https://localhost/algo.jpg";

  test("debe mostar el componente correctamente (hacer match con un snapshot)", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
