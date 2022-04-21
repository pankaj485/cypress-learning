/// <reference types="cypress" />

// todo visit the homepage, navigate to login page and then get back to home page again while validating all the pages with assertions

describe("browser navigation challange", () => {
	it("challange 1", () => {
		// visit homepage
		cy.visit("http:///www.webdriveruniversity.com");

		// click the todo list link
		cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });

		// verify the todo list  page
		cy.url().should("include", "To-Do-List");

		// get back to home page
		cy.go("back");

		// verify the homepage
		cy.url().should("include", "webdriveruniversity.com");
	});
});
