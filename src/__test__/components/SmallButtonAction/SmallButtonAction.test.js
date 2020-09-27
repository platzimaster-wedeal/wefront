import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import { MdAdd } from "react-icons/md";
import SmallButtonSA from "../../../components/Buttons/SmallButtonSA";
import SmallButtonCA from "../../../components/Buttons/SmallButtonCA";

describe("<SmallButtonSA/>", () => {
 const buttonSA = mount(<SmallButtonSA icon={MdAdd} />);
 test("SmallButtonSA render test", () => {
  expect(buttonSA.length).toEqual(1);
 });
 test("UI Snapchot for SmallButtonAction", () => {
  const squareButtonAction = create(<SmallButtonSA icon={MdAdd} />);
  expect(squareButtonAction.toJSON()).toMatchSnapshot();
 });
});

describe("<SmallButtonCA/>", () => {
 const buttonCA = mount(<SmallButtonCA icon={MdAdd} />);
 test("SmallButtonCA render test", () => {
  expect(buttonCA.length).toEqual(1);
 });
 test("UI Snapshot for SmallButtonCA component", () => {
  const circleButtonAction = create(<SmallButtonCA icon={MdAdd} />);
  expect(circleButtonAction.toJSON()).toMatchSnapshot();
 });
});
