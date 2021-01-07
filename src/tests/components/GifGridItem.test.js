import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import "../../setupTests";

describe("Pruebas para GifGridItem", () => {
  test("debe mostar el componente correctamente (hacer match con un snapshot)", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
