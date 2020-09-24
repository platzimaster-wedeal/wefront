import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblemDescription from "../../../components/PostProblemDescription/PostProblemDescription";

describe("Test for the component PostProblemDescription :D", () => {
 const PostProblemDescriptionMounted = mount(<PostProblemDescription />);
 const PostProblemDescriptionCreated = create(<PostProblemDescription />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemDescriptionCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemDescriptionMounted.length).toEqual(1);
  });
  test("Should the description of the post be a string", () => {
   expect(
    typeof PostProblemDescriptionMounted.find(
     ".post-problem-description__content"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the post must be a string", () => {
   expect(
    typeof PostProblemDescriptionMounted.find(
     ".post-problem-description__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the post be Description", () => {
   expect(
    PostProblemDescriptionMounted.find(
     ".post-problem-description__title"
    ).text()
   ).toEqual("Description");
  });
 });
});
