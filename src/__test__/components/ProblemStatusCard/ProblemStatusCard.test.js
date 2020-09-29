import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProblemStatusCard from "../../../components/ProblemStatusCard/ProblemStatusCard";

describe("Test for the component ProblemStatusCard :D", () => {
 const ProblemStatusCardMounted = mount(<ProblemStatusCard />);
 const ProblemStatusCardCreated = create(<ProblemStatusCard />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(ProblemStatusCardCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(ProblemStatusCardMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof ProblemStatusCardMounted.find(
     ".problem-status-card__header h3"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be Worker Information", () => {
   expect(
    typeof ProblemStatusCardMounted.find(
     ".problem-status-card__header small"
    ).text()
   ).toEqual("string");
  });
 });
});
