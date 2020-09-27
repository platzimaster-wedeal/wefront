import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfilePicture from "../../../components/ProfilePictures/ProfilePicture";

describe("<ProfilePicture/>", () => {
 test("Should render the ProfilePicture component", () => {
  const profilePicture = mount(<ProfilePicture />);
  expect(profilePicture.length).toEqual(1);
 });
 test("ProfilePicture Snapshot", () => {
  const profilePicture = create(<ProfilePicture />);
  expect(profilePicture.toJSON()).toMatchSnapshot();
 });
});
