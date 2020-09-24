import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblem from "../../../components/PostProblem/PostProblem";

describe("Test for the component PostProblem :D", () => {
 const PostProblemMounted = mount(<PostProblem />);
 const PostProblemCreated = create(<PostProblem />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemMounted.length).toEqual(1);
  });
 });
});
