/// <reference types="cypress" />

describe("Validate webdriveruni homepage", () => {
	it("confirm links redirect to the correct pages", () => {
		cy.visit("http:///www.webdriveruniversity.com");
		cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

		// using browser operations
		cy.go("back");

		cy.reload();

		// reload without using cache
		// cy.reload(true);

		cy.go("forward");

		cy.url().should("include", "contactus");
	});

	it("visit various pages", () => {
		cy.visit("http:///www.webdriveruniversity.com");
		cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

		// using browser operations
		cy.go("back");
		cy.reload();
		cy.go("forward");

		// confirming that we are on the right url
		cy.url().should("include", "contactus");

		// uisng browser operations and verifying that we are on right page
		cy.go("back");
		cy.get("#login-portal")
			.invoke("removeAttr", "target")
			.click({ force: true });
		cy.url().should("include", "Login-Portal");
		cy.go("back");
		cy.url().should("include", "webdriveruniversity");
	});
});
