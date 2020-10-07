import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerMainInformation from "../../../components/WorkerMainInformation/WorkerMainInformation";

describe("Test for the component WorkerMainInformation :D", () => {
 const WorkerMainInformationMounted = mount(<WorkerMainInformation />);
 const WorkerMainInformationCreated = create(<WorkerMainInformation />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerMainInformationCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerMainInformationMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerMainInformationMounted.find(
     ".worker-main-information__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be Worker Information", () => {
   expect(
    WorkerMainInformationMounted.find(".worker-main-information__title").text()
   ).toEqual("Main Information");
  });
 });
});
