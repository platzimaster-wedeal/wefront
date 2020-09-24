import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblemPrevisualization from "../../../components/PostProblemPrevisualization/PostProblemPrevisualization";

describe("Test for the component PostProblemPrevisualization :D", () => {
 const PostProblemPrevisualizationMounted = mount(
  <PostProblemPrevisualization />
 );
 const PostProblemPrevisualizationCreated = create(
  <PostProblemPrevisualization />
 );

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemPrevisualizationCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemPrevisualizationMounted.length).toEqual(1);
  });
  test("Should the name of the problem be a string", () => {
   expect(
    typeof PostProblemPrevisualizationMounted.find(
     ".post-problem-previsualization__info h4"
    ).text()
   ).toEqual("string");
  });
  test("Should the description of the problem be a string", () => {
   expect(
    typeof PostProblemPrevisualizationMounted.find(
     ".post-problem-previsualization__description"
    ).text()
   ).toEqual("string");
  });
  test("Should the id of the problem be a number", () => {
   expect(
    typeof Number(
     PostProblemPrevisualizationMounted.find(
      ".post-problem-previsualization__info strong"
     )
      .text()
      .split("#")[1]
    )
   ).toEqual("number");
  });
 });
});
