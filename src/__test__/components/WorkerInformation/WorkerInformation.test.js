import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerInformation from "../../../components/WorkerInformation/WorkerInformation";

describe("Test for the component WorkerInformation :D", () => {
 const WorkerInformationMounted = mount(<WorkerInformation />);
 const WorkerInformationCreated = create(<WorkerInformation />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerInformationCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerInformationMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerInformationMounted.find(".worker-information__title h3").text()
   ).toEqual("string");
  });
  test("Should the title of the component be Worker Information", () => {
   expect(
    WorkerInformationMounted.find(".worker-information__title h3").text()
   ).toEqual("Worker Information");
  });
  test("Should the action of the component be a string", () => {
   expect(
    typeof WorkerInformationMounted.find(
     ".worker-information__title strong"
    ).text()
   ).toEqual("string");
  });
  test("Should the action of the component be See all information", () => {
   expect(
    WorkerInformationMounted.find(".worker-information__title strong").text()
   ).toEqual("See all information");
  });
 });
});
