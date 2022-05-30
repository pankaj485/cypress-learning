/// <reference types="cypress" />

describe("SignUp and Login", () => {
  // credentials used
  let randomUsername = Math.random().toString(36).substring(2);
  let randomEmail = randomUsername + "@randommail.com";
  let password = "Password234";

  it("Test Valid signup", () => {
    cy.intercept("POST", "**/*.realworld.io/api/users").as("newUser");
    cy.visit("http://localhost:4200");

    // sign up with new account
    cy.get(".nav").contains("Sign up").click();
    cy.get("[placeholder='Username']").type(randomUsername);
    cy.get("[placeholder='Email']").type(randomEmail);
    cy.get("[placeholder='Password']").type(password);
    cy.get("form button").should("contain", "Sign up").click();

    cy.wait("@newUser").should(({ request, response }) => {
      // print request and response
      cy.log(JSON.stringify(request));
      cy.log(JSON.stringify(response));

      // verify status code
      expect(response.statusCode).to.eql(200);

      // verify username and email request and response body
      expect(request.body.user.username).to.eql(randomUsername);
      expect(response.body.user.username).to.eql(randomUsername);
      expect(request.body.user.email).to.eql(randomEmail);
      expect(response.body.user.email).to.eql(randomEmail);
    });
  });

  it("Test Valid Login and Mock data ", () => {
    cy.visit("http://localhost:4200/");

    // intercept XHR, mock data using tags inside fixtures file
    cy.intercept("GET", "**/tags", { fixture: "tags.json" }).as("signIn");

    // sign in with the newly created account.
    cy.get(".nav").contains("Sign in").click();
    cy.get("[placeholder='Email']").type(randomEmail);
    cy.get("[placeholder='Password']").type(password);
    cy.get("form button").should("contain", "Sign in").click();

    cy.wait("@signIn").should(({ request, response }) => {
      console.log(request);
      console.log(response);
    });

    cy.get(".tag-list").should("contain", "hello");
  });

  // assignment: create 2 articles by mocking data.
  it("Create 2 posts", () => {
    // intercept request url and mock data using local fixture > articles.json file
    // requesting url: https://api.realworld.io/api/articles?limit=10&offset=0
    cy.intercept("GET", "**/articles*", {
      fixture: "articles.json",
    });

    cy.wait(1000);

    cy.get(".feed-toggle > .nav > :nth-child(2) > .nav-link")
      .should("exist")
      .click();
  });
});
