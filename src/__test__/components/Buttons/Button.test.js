import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { MdAdd } from "react-icons/md";
import Button from "../../../components/Buttons/Button";
import ButtonAction from "../../../components/Buttons/ButtonAction";

describe("<Button/>", () => {
 const button = mount(<Button />);
 test("Render del componente Button", () => {
  expect(button.length).toEqual(1);
 });
 test("Render de children de un componente", () => {
  expect(button.find(".button").text()).toEqual("");
 });
});

describe("Button Snapshot", () => {
 test("Comprobar la UI del componente Button", () => {
  const button = create(<Button />);
  expect(button.toJSON()).toMatchSnapshot();
 });
});

describe("<ButtonAction/>", () => {
 test("ButtonAction render test", () => {
  const buttonAction = mount(<ButtonAction icon={MdAdd} />);
  expect(buttonAction.length).toEqual(1);
 });
 test("ButtonAction snapshot", () => {
  const buttonAction = create(<ButtonAction icon={MdAdd} />);
  expect(buttonAction.toJSON()).toMatchSnapshot();
 });
});
