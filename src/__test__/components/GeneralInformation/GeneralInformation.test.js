import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import GeneralInformation from "../../../components/GeneralInformation/GeneralInformation";

describe("<Button/>", () => {
 const generalInformation = mount(<GeneralInformation/>);
 test("Render del componente GeneralInformation", () => {
  expect(generalInformation.length).toEqual(1);
 });
 test("Render del título de un componente", () => {
  expect(generalInformation.find(".GeneralInformation__title").text()).toEqual("General Information");
 });
});

describe("Button Snapshot", () => {
 test("Comprobar la UI del componente GeneralInformation", () => {
  const generalInformation = create(<GeneralInformation />);
  expect(generalInformation.toJSON()).toMatchSnapshot();
 });
});