/// <reference types="cypress"/>

// for the endpoint /comments,
// 1. get req
// 2. post req for id 2
// 3. delete req for id 2
// 4. put req on id 1

describe("API challanges ", () => {
  it("GET req on /comments", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.log("made GET req on /comments");
    });
  });

  it("POST req on /comments", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        body: "POST on index 2",
        postId: 2,
      },
    }).then(() => {
      cy.log("made POST req on /comments/2");
    });
  });

  it("Verify POST req on /comments/2", () => {
    cy.request({
      method: "GET",
      url: "http:localhost:3000/comments/2",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let data = JSON.parse(JSON.stringify(response.body));
      let dataBody = data["body"];
      expect(dataBody).to.eql("POST on index 2");
      cy.log("verified POST req on /comments/2");
    });
  });

  it("DELETE req on /comments/2", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/comments/2",
    }).then((response) => {
      expect(response.status).to.eql(200);
      cy.log("made DELETE req on /comments/2");
    });
  });

  it("PUT req on /comments/1", () => {
    cy.request({
      method: "PUT",
      url: "http:localhost:3000/comments/1",
      body: {
        body: "PUT on index 1",
      },
    }).then(() => cy.log("made POST req on /comments/1"));
  });

  it("Verify PUT req on /comments/1", () => {
    cy.request({
      method: "GET",
      url: "http:localhost:3000/comments/1",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let data = JSON.parse(JSON.stringify(response.body));
      let dataBody = data["body"];
      expect(dataBody).to.eql("PUT on index 1");
      cy.log("verified POST req on /comments/2");
    });
  });
});
