/// <reference types="cypress" />

describe("JSON Object", () => {
  before(() => {
    //
  });

  it("Json Object Example", () => {
    //
    const exampleObject = {
      key: "value",
      another_key: "another_value",
      key_3: "value_3",
    };

    const exampleObjValueArrays = ["Sophie", "Rose", "Howard"];

    const users = {
      key: "value",
      another_key: "another_value",
      key_3: "value_3",
      students: ["Sophie", "Rose", "Howard"],
    };

    cy.log(exampleObject.key);
    cy.log(exampleObject.another_key);
    cy.log(exampleObject.key_3);

    exampleObjValueArrays.map((arr) => cy.log(arr));

    cy.log(users.students[0]);
  });
});
