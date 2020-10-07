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
  test("Should the content of the action string", () => {
   expect(
    typeof mount(<PostProblemDetail isWorker />)
     .find(".post-problem-detail__actions button")
     .text()
   ).toEqual("string");
  });
  test("Should the content of the action be Apply!", () => {
   expect(
    mount(<PostProblemDetail isWorker />)
     .find(".post-problem-detail__actions button")
     .text()
   ).toEqual("Apply!");
  });
 });
});
