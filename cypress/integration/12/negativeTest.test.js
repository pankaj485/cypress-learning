/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
	it("Should fail to submit form", () => {
		cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
		cy.get('[name="first_name"]').type("Pank");
		cy.get('[name="last_name"]').type("Aj");
		cy.get('[name="email"]').type(" ");
		cy.get("textarea.feedback-input").type(
			"this is lorem ipsum equivalnet text which means these are texts but these are not the valid texts so we can't even see or read the contents and consider it as a valid text field "
		);
		cy.get('[type="submit"]').click();
	});
});
