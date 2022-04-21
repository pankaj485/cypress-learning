/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
	it("Should be able to submit a successful submission via contact us form", () => {
		cy.visit("https://www.automationteststore.com/");
		cy.get(".prdocutname")
			.contains("Skinsheen Bronzer Stick")
			.click()
			.then((itemHeaderText) => {
				cy.log("selected following text: " + itemHeaderText.text());
			});
	});
});
