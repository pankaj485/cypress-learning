/// <reference types="cypress" />

describe("Handling Multiple Tabs", () => {
	it("Validate a specifi hair care product", () => {
		cy.visit("https://www.webdriveruniversity.com/");
		// using jQurey to remove attribute of target
		// getBackHere
		cy.get("#contact-us").invoke("removeAttr", "target").click();
	});
});
