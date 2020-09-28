import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfileProblemsItems from "../../../components/ProfileProblems/ProfileProblemsItems";

describe("<Profile Problems Items/>", () => {
 const profileProblemsItems = mount(<ProfileProblemsItems />);
 test("Render del componente ProfileProblemsItems", () => {
  expect(profileProblemsItems.length).toEqual(1);
 });
 test("Render del título de un componente", () => {
  expect(profileProblemsItems.find(".ProfileProblems__id").text()).toEqual(
   "#"
  );
 });
});

describe("Profile Problems Items Snapshot", () => {
 test("Comprobar la UI del componente ProfileProblemsItems", () => {
  const profileProblemsItems = create(<ProfileProblemsItems />);
  expect(profileProblemsItems.toJSON()).toMatchSnapshot();
 });
});