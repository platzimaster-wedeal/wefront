import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";

describe("Test for the component ProfileHeader :D", () => {
 const ProfileHeaderMounted = mount(<ProfileHeader />);
 const ProfileHeaderCreated = create(<ProfileHeader />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(ProfileHeaderCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(ProfileHeaderMounted.length).toEqual(1);
  });
  test("Should the description of the User must be a string", () => {
   expect(
    typeof ProfileHeaderMounted.find(".profile-header__description").text()
   ).toEqual("string");
  });
  test("Should the profession of the User must be a string", () => {
   expect(
    typeof ProfileHeaderMounted.find(".profile-header__profession").text()
   ).toEqual("string");
  });
 });
});
