import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfileHeaderPhoto from "../../../components/ProfileHeaderPhoto/ProfileHeaderPhoto";

describe("Test for the component ProfileHeader :D", () => {
 const ProfileHeaderPhotoMounted = mount(<ProfileHeaderPhoto />);
 const ProfileHeaderPhotoCreated = create(<ProfileHeaderPhoto />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(ProfileHeaderPhotoCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(ProfileHeaderPhotoMounted.length).toEqual(1);
  });
  test("Should the name of the User must be a string", () => {
   expect(
    typeof ProfileHeaderPhotoMounted.find(".profile-header-photo__name").text()
   ).toEqual("string");
  });
 });
});
