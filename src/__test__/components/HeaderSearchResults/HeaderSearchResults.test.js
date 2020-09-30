import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import HeaderSearchResults from "../../../components/HeaderSearchResults/HeaderSearchResults";

describe("Test for the component HeaderSearchResults :D", () => {
 const HeaderSearchResultsMounted = mount(<HeaderSearchResults />);
 const HeaderSearchResultsCreated = create(<HeaderSearchResults />);

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(HeaderSearchResultsCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(HeaderSearchResultsMounted.length).toEqual(1);
  });
  test("Should the tilte of first selected view of the component be a string", () => {
   expect(
    typeof HeaderSearchResultsMounted.find(
     ".header-search-results__header--active"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of first selected view of the component be Persons", () => {
   expect(
    HeaderSearchResultsMounted.find(
     ".header-search-results__header--active"
    ).text()
   ).toEqual("Persons");
  });
  test("Should the message of the component whene is not items to map be a string", () => {
   expect(
    typeof HeaderSearchResultsMounted.find(
     ".header-search-results__results span"
    ).text()
   ).toEqual("string");
  });
  test("Should the message of the component whene is not items to map be a Sorry, we can't found what you looking for", () => {
   expect(
    HeaderSearchResultsMounted.find(
     ".header-search-results__results span"
    ).text()
   ).toEqual("Sorry, we can't found what you looking for");
  });
 });
});
