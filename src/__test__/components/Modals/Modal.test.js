import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Modal from "../../../components/Modals/Modal";

describe("Test for the component Modal :D", () => {
 const ModalMounted = mount(<Modal />);
 const ModalCreated = create(<Modal />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(ModalCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(ModalMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(typeof ModalMounted.find(".modal__title h2").text()).toEqual(
    "string"
   );
  });
  test("Should the title of the component be a string", () => {
   expect(
    mount(<Modal title="Test Modal" />)
     .find(".modal__title h2")
     .text()
   ).toEqual("Test Modal");
  });
  test("Should the action of the component be a string", () => {
   expect(typeof ModalMounted.find(".modal__action button").text()).toEqual(
    "string"
   );
  });
  test("Should the action of the component be a string", () => {
   expect(ModalMounted.find(".modal__action button").text()).toEqual("Close");
  });
 });
});
