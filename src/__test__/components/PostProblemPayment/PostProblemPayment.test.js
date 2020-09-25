import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PostProblemPayment from "../../../components/PostProblemPayment/PostProblemPayment";

describe("Test for the component PostProblemPayment :D", () => {
 const PostProblemPaymentMounted = mount(<PostProblemPayment />);
 const PostProblemPaymentCreated = create(<PostProblemPayment />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(PostProblemPaymentCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(PostProblemPaymentMounted.length).toEqual(1);
  });
  test("Should the label of the problem be a string", () => {
   expect(
    typeof PostProblemPaymentMounted.find(".post-problem-payment__title").text()
   ).toEqual("string");
  });
  test("Should the price of the problem be a number", () => {
   expect(
    typeof Number(
     PostProblemPaymentMounted.find(".post-problem-payment__current-price")
      .text()
      .split("$")[1]
    )
   ).toEqual("number");
  });
 });
});
