import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfileProblemsContainer from "../../../components/ProfileProblems/ProfileProblemsContainer";

describe("<Profile Problems Container/>", () => {
 const profileProblemsContainer = mount(<ProfileProblemsContainer />);
 test("Render del componente ProfileProblemsContainer", () => {
  expect(profileProblemsContainer.length).toEqual(1);
 });
 test("Render del título de un componente", () => {
  expect(
   profileProblemsContainer.find(".ProfileProblems__title").text()
  ).toEqual("Problems Of Mine");
 });
});

describe("Profile Problems Container Snapshot", () => {
 test("Comprobar la UI del componente ProfileProblemsContainer", () => {
  const profileProblemsContainer = create(<ProfileProblemsContainer />);
  expect(profileProblemsContainer.toJSON()).toMatchSnapshot();
 });
});
