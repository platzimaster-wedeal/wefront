import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import HeaderSearchFilters from "../../../components/HeaderSearchFilters/HeaderSearchFilters";

describe("Test for the component HeaderSearchFilters :D", () => {
 const HeaderSearchFiltersMounted = mount(<HeaderSearchFilters />);
 const HeaderSearchFiltersCreated = create(<HeaderSearchFilters />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(HeaderSearchFiltersCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(HeaderSearchFiltersMounted.length).toEqual(1);
  });

  test("Should the title of the component be a string", () => {
   expect(
    typeof HeaderSearchFiltersMounted.find(
     ".header-search-filters__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component be Filters", () => {
   expect(
    HeaderSearchFiltersMounted.find(".header-search-filters__title").text()
   ).toEqual("Filters");
  });
 });
});
