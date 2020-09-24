import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostShare from "../../../components/PostShare/PostShare";

describe("Test for the component PostShare :D", () => {
 const PostShareMounted = mount(<PostShare />);
 const PostShareCreated = create(<PostShare />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostShareCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostShareMounted.length).toEqual(1);
  });
  test("Should the content of the post be a string", () => {
   expect(
    typeof PostShareMounted.find(".post-share__content p").text()
   ).toEqual("string");
  });
 });
});
