import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Button from "../../../components/Buttons/Button";

describe("<Button/>", () => {
 const button = mount(<Button>Make Deal!</Button>);
 test("Render del componente Button", () => {
  expect(button.length).toEqual(1);
 });
 test("Render de children de un componente", () => {
  expect(button.find(".button").text()).toEqual("Make Deal!");
 });
});

describe("Button Snapshot", () => {
 test("Comprobar la UI del componente Button", () => {
  const button = create(<Button />);
  expect(button.toJSON()).toMatchSnapshot();
 });
});
