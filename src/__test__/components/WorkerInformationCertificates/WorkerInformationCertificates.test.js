import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import WorkerInformationCertificates from "../../../components/WorkerInformationCertificates/WorkerInformationCertificates";

describe("Test for the component WorkerInformationCertificates :D", () => {
 const WorkerInformationCertificatesMounted = mount(
  <WorkerInformationCertificates certificates={["something"]} />
 );
 const WorkerInformationCertificatesCreated = create(
  <WorkerInformationCertificates />
 );

 describe("Visual tests for the component", () => {
  test("should the comopnent have the same tree", () => {
   expect(WorkerInformationCertificatesCreated.toJSON()).toMatchSnapshot();
  });
 });

 describe("Functional tests for the component", () => {
  test("Should the component render one element", () => {
   expect(WorkerInformationCertificatesMounted.length).toEqual(1);
  });
  test("Should the title of the component be a string", () => {
   expect(
    typeof WorkerInformationCertificatesMounted.find(
     ".worker-information-certificates__title"
    ).text()
   ).toEqual("string");
  });
  test("Should the title of the component equal Experience", () => {
   expect(
    WorkerInformationCertificatesMounted.find(
     ".worker-information-certificates__title"
    ).text()
   ).toEqual("Experience");
  });
  test("Should the description of null information be a string", () => {
   expect(
    typeof mount(<WorkerInformationCertificates />)
     .find(".worker-information-certificates__list span")
     .text()
   ).toEqual("string");
  });
  test("Should the description of the component be equal to This user doesn't have certificates upload", () => {
   expect(
    mount(<WorkerInformationCertificates />)
     .find(".worker-information-certificates__list span")
     .text()
   ).toEqual("This user doesn't have certificates upload");
  });
 });
});
