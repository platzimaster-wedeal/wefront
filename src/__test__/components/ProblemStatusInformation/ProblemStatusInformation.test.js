import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import ProblemStatusInformation from "../../../components/ProblemStatusInformation/ProblemStatusInformation";

describe("Test for the component ProblemStatusInformation :D", () => {
 const ProblemStatusInformationMounted = mount(<ProblemStatusInformation />);
 const ProblemStatusInformationCreated = create(<ProblemStatusInformation />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(ProblemStatusInformationCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(ProblemStatusInformationMounted.length).toEqual(1);
  });

  test("Should the message of current status step be a string", () => {
   expect(
    typeof ProblemStatusInformationMounted.find(
     ".problem-status-information__status-message"
    ).text()
   ).toEqual("string");
  });
  test("Should the message of current status step be a string", () => {
   expect(
    ProblemStatusInformationMounted.find(
     ".problem-status-information__status-message"
    ).text()
   ).toEqual("The user @Alan is solving the problem.");
  });
  test("Should the message of current status step be a string", () => {
   expect(
    typeof mount(<ProblemStatusInformation problemStatus={false} />)
     .find(".problem-status-information__status-message")
     .text()
   ).toEqual("string");
  });
  test("Should the message of current status step be a The problem is still open!", () => {
   expect(
    mount(<ProblemStatusInformation problemStatus={false} />)
     .find(".problem-status-information__status-message")
     .text()
   ).toEqual("The problem is still open!");
  });

  test("Should the message of non worker of the component be a string", () => {
   expect(
    typeof ProblemStatusInformationMounted.find(
     ".problem-status-information__workers-message"
    ).text()
   ).toEqual("string");
  });
  test("Should the message of non worker of the component be a string", () => {
   expect(
    ProblemStatusInformationMounted.find(
     ".problem-status-information__workers-message"
    ).text()
   ).toEqual("No workers have come forward yet");
  });
 });
});
