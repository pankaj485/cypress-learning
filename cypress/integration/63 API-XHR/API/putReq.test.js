/// <reference types="cypress" />

describe("PUT Request", () => {
  var index = 3;
  var titleToUpdate = "updated with PUT method";

  it("update existing on /posts api", () => {
    // sending PUT request to endpoint
    cy.request({
      method: "PUT",
      url: `http://localhost:3000/posts/${index}`,
      body: {
        title: titleToUpdate,
        author: "pank",
      },
    }).then((response) => {
      // if PUT request is successful, then it gives 200 status code
      expect(response.status).to.eql(200);
    });
  });

  // Verify the PUT request
  it("get the updated body and verify ", () => {
    // make get req to the updated data url
    cy.request({
      method: "GET",
      url: `http://localhost:3000/posts/${index}`,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let data = JSON.parse(JSON.stringify(response.body));

      // verify recived json body aganist the local data
      expect(data["title"]).to.eql(titleToUpdate);
    });
  });
});
