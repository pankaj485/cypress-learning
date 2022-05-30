/// <reference types="cypress" />

describe("DELETE Request", () => {
  var index = 2;

  it("delete a post via /posts api", () => {
    // sending DELETE request to endpoint
    cy.request({
      method: "DELETE",
      url: `http://localhost:3000/posts/${index}`,
    }).then((response) => {
      // if DELETE request is successful, then it gives 200 status code
      expect(response.status).to.eql(200);
    });
  });
});
