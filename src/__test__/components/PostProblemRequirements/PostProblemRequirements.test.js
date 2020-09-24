import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblemRequirements from "../../../components/PostProblemRequirements/PostProblemRequirements";

describe("Test for the component PostProblemRequirements :D", () => {
 const PostProblemRequirementsMounted = mount(<PostProblemRequirements />);
 const PostProblemRequirementsCreated = create(<PostProblemRequirements />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemRequirementsCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemRequirementsMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof PostProblemRequirementsMounted.find(
     ".post-problem-requirements__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be Minimun Requirements", () => {
   expect(
    PostProblemRequirementsMounted.find(
     ".post-problem-requirements__title"
    ).text()
   ).toEqual("Minimun Requirements");
  });
 });
});
