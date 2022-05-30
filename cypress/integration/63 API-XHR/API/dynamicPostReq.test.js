/// <reference types="cypress" />

describe("Dynamic POST Request", () => {
  // arry to store title recived from resopnse body
  var titleOfPosts = new Array();

  // create and store random string
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("create new post via /posts api", () => {
    // sending POST request to endpoint
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: randomTitle,
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
      })
      .then(() => {
        // verify the last entry aganist keyword passed
        var lastTitle = titleOfPosts[titleOfPosts.length - 1];
        expect(lastTitle).to.eql(randomTitle);
      });
  });
});
