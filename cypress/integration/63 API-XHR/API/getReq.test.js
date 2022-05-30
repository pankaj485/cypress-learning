/// <reference types="cypress" />

describe("Get Request", () => {
  var result;
  it("validate status code of the /posts api", () => {
    // making http request to the following URL
    result = cy.request("http://localhost:3000/posts");

    // validating the response status code
    result.its("status").should("equal", 200);
  });

  it("validate /posts api contains the correct keys and value", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      // converts response body to JSON, and convert that JSON to object
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body);

      // expect(body[0]).has.property("title", "json-server");
      // expect(body[1]).has.property("id", 2);
      // expect(body[2]).has.property("author", "pank");

      // iterating through each of child of body var
      body.forEach((item) => {
        // verify keys of each objects
        expect(item).to.have.all.keys("id", "title", "author");

        // print out iterated keys with values
        cy.log(
          "id: " +
            item["id"] +
            ", title: " +
            item["title"] +
            ", author: " +
            item["author"]
        );
      });
    });
  });
});
