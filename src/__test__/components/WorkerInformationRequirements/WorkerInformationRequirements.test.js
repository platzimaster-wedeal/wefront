import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerInformationRequirements from "../../../components/WorkerInformationRequirements/WorkerInformationRequirements";

describe("Test for the component WorkerInformationRequirements :D", () => {
 const WorkerInformationRequirementsMounted = mount(
  <WorkerInformationRequirements requirements={["new requirement"]} />
 );
 const WorkerInformationRequirementsCreated = create(
  <WorkerInformationRequirements />
 );

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerInformationRequirementsCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerInformationRequirementsMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerInformationRequirementsMounted.find(
     ".worker-information-requirements__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component equal requirements", () => {
   expect(
    WorkerInformationRequirementsMounted.find(
     ".worker-information-requirements__title"
    ).text()
   ).toEqual("Requirements");
  });
 });
});
