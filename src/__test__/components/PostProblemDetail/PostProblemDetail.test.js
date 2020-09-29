import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblemDetail from "../../../components/PostProblemDetail/PostProblemDetail";

describe("Test for the component PostProblemDetail :D", () => {
 const PostProblemDetailMounted = mount(<PostProblemDetail />);
 const PostProblemDetailCreated = create(<PostProblemDetail />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemDetailCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemDetailMounted.length).toEqual(1);
  });
 });
});
