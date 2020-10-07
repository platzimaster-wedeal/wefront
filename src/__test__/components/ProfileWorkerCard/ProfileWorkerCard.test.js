import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProfileWorkerCard from "../../../components/ProfileWorkerCard/ProfileWorkerCard";

describe("Tests for ProfileWorkerCard components", () => {
 const ProfileWorkerCardMounted = mount(<ProfileWorkerCard />);
 const ProfileWorkerCardCreated = create(<ProfileWorkerCard />);

 describe("Visual tests for the SelectCategoires component", () => {
  test("should the component render one component", () => {
   expect(ProfileWorkerCardMounted.length).toEqual(1);
  });
  test("should the component have the same JSON tree", () => {
   expect(ProfileWorkerCardCreated.toJSON).toMatchSnapshot();
  });

  test("should the name of the component be a string", () => {
   expect(
    typeof ProfileWorkerCardMounted.find(
     ".profile-worker-card__content-header h3"
    ).text()
   ).toEqual("string");
  });
  test("should the profession of the component be a string", () => {
   expect(
    typeof ProfileWorkerCardMounted.find(
     ".profile-worker-card__content-header small"
    ).text()
   ).toEqual("string");
  });

  test("should the description of the component be a string", () => {
   expect(
    typeof ProfileWorkerCardMounted.find(
     ".profile-worker-card__description"
    ).text()
   ).toEqual("string");
  });
 });
});
