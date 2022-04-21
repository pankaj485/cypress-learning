/// <reference types="cypress" />

describe("printing the content of the button pressed on clicking", () => {
	it("should be able to print the button texts", () => {
		cy.visit("https://www.automationteststore.com/");
		cy.get(".block_frame")
			.contains("Contact Us")
			.click()
			.then((clickedValue) => {
				cy.log("it contained: " + clickedValue.text());
			});
	});
});
