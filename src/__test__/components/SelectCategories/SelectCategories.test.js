import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import SelectCategories from "../../../components/SelectCategories/SelectCategories";

describe("Tests for SelectCategories components", () => {
 const SelectCategoriesMounted = mount(<SelectCategories />);
 const SelectCategoriesCreated = create(<SelectCategories />);

 describe("Visual tests for the SelectCategoires component", () => {
  test("should the component render one component", () => {
   expect(SelectCategoriesMounted.length).toEqual(1);
  });
  test("should the component have the same JSON tree", () => {
   expect(SelectCategoriesCreated.toJSON).toMatchSnapshot();
  });
  test("should the title of the component be a string", () => {
   expect(
    typeof SelectCategoriesMounted.find(".select-categories label").text()
   ).toEqual("string");
  });

  test("should the second title of the component be a string", () => {
   expect(
    typeof SelectCategoriesMounted.find(".select-categories small").text()
   ).toEqual("string");
  });
 });
});
