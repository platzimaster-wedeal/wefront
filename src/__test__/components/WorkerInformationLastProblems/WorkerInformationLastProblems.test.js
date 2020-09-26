import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerInformationLastProblems from "../../../components/WorkerInformationLastProblems/WorkerInformationLastProblems";

describe("Test for the component WorkerInformationLastProblems :D", () => {
 const WorkerInformationLastProblemsMounted = mount(
  <WorkerInformationLastProblems problems={["new problem"]} />
 );
 const WorkerInformationLastProblemsCreated = create(
  <WorkerInformationLastProblems />
 );

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerInformationLastProblemsCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerInformationLastProblemsMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerInformationLastProblemsMounted.find(
     ".worker-information-last-problems__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be equal to Last Problems Solved", () => {
   expect(
    WorkerInformationLastProblemsMounted.find(
     ".worker-information-last-problems__title"
    ).text()
   ).toEqual("Last Problems Solved");
  });

  test("Should the description of null information be a string", () => {
   expect(
    typeof mount(<WorkerInformationLastProblems />)
     .find(".worker-information-last-problems__list span")
     .text()
   ).toEqual("string");
  });
  test("Should the description of the component be equal to This user doesn't have certificates upload", () => {
   expect(
    mount(<WorkerInformationLastProblems />)
     .find(".worker-information-last-problems__list span")
     .text()
   ).toEqual("This user doesn't have solve any problem yet.");
  });
 });
});
