import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostHeader from "../../../components/PostHeader/PostHeader";

describe("Test for the component PostHeader :D", () => {
 const PostHeaderMounted = mount(<PostHeader />);
 const PostHeaderCreated = create(<PostHeader />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostHeaderCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostHeaderMounted.length).toEqual(1);
  });
  test("Should the name of the User be a string", () => {
   expect(
    typeof PostHeaderMounted.find(".post-header__user-info--main h3").text()
   ).toEqual("string");
  });

  test("Should the type of post be a string", () => {
   expect(
    typeof PostHeaderMounted.find(".post-header__user-info--main span").text()
   ).toEqual("string");
  });
  test("Should be the type of post be equal to Has a new problem!", () => {
   expect(
    PostHeaderMounted.find(".post-header__user-info--main span").text()
   ).toEqual("Has a new problem!");
  });
  test("should be the type of post equal to Has shared!", () => {
   expect(
    mount(<PostHeader share />)
     .find(".post-header__user-info--main span")
     .text()
   ).toEqual("Has shared!");
  });

  test("should the time of the post be a number", () => {
   expect(
    typeof Number(PostHeaderMounted.find(".post-header__time").text().charAt(0))
   ).toEqual("number");
  });
 });
});
