/// <reference types="cypress" />

describe("POST Request", () => {
  // array to store title recived from resopnse body
  let titleOfPosts = new Array();
  let titleToAdd = "added index 5 with POST req";

  it("create new post via /posts api", () => {
    // sending POST request to endpoint
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: titleToAdd,
        author: "pank",
      },
    }).then((response) => {
      // if POST request is successful, then it gives 201 status code
      expect(response.status).to.eql(201);
    });
  });

  // Verify the POST request and print the titles
  it("validate title of latest post", () => {
    // make GET request
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach((item) => {
          titleOfPosts.push(item["title"]);
        });
        // titleOfPosts.map((i) => cy.log(i));
      })
      .then(() => {
        // verify the last entry aganist keyword passed
        var lastTitle = titleOfPosts[titleOfPosts.length - 1];
        expect(lastTitle).to.eql(titleToAdd);
      });
  });
});
