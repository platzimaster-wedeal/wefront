import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerInformationSkills from "../../../components/WorkerInformationSkills/WorkerInformationSkills";

describe("Test for the component WorkerInformationSkills :D", () => {
 const WorkerInformationSkillsMounted = mount(
  <WorkerInformationSkills skills={["new skills"]} />
 );
 const WorkerInformationSkillsCreated = create(<WorkerInformationSkills />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerInformationSkillsCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerInformationSkillsMounted.length).toEqual(1);
  });

  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerInformationSkillsMounted.find(
     ".worker-information-skills__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be equal to Last Skills And Categories", () => {
   expect(
    WorkerInformationSkillsMounted.find(
     ".worker-information-skills__title"
    ).text()
   ).toEqual("Skills And Categories");
  });

  test("Should the description of null information be a string", () => {
   expect(
    typeof mount(<WorkerInformationSkills />)
     .find(".worker-information-skills__list span")
     .text()
   ).toEqual("string");
  });
  test("Should the description of the component be equal to This user aren't in some category.", () => {
   expect(
    mount(<WorkerInformationSkills />)
     .find(".worker-information-skills__list span")
     .text()
   ).toEqual("This user aren't in some category.");
  });
 });
});
