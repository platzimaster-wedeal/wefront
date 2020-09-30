import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import HeaderProfileMenu from "../../../components/HeaderProfileMenu/HeaderProfileMenu";

describe("<HeaderProfileMenu/>", () => {
 const headerProfileMenu = mount(<HeaderProfileMenu />);
 test("Render del componente HeaderProfileMenu", () => {
  expect(headerProfileMenu.length).toEqual(1);
 });
 test("Render del título de un componente", () => {
  expect(
   headerProfileMenu.findWhere((n) => n.type === "Link" && n.contains("Home"))
  );
 });
});

describe("headerProfileMenu Snapshot", () => {
 test("Comprobar la UI del componente HeaderProfileMenu", () => {
  const headerProfileMenu = create(<HeaderProfileMenu />);
  expect(headerProfileMenu.toJSON()).toMatchSnapshot();
 });
});
