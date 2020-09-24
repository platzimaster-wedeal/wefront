import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import FormStep from "../../../components/FormStep/FormStep";

describe("Test for the component FormStep :D", () => {
 const FormStepMounted = mount(<FormStep />);
 const FormStepCreated = create(<FormStep />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(FormStepCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(FormStepMounted.length).toEqual(1);
  });
  test("Should the description of the User must be a string", () => {
   expect(typeof FormStepMounted.find(".form-step__title").text()).toEqual(
    "string"
   );
  });
 });
});
