/// <reference types="cypress" />

// _PO means page object

class HomePage_PO {
	// create command to visit webpage
	visitHomepage() {
		cy.visit(Cypress.env("webDriverHomePage"));
	}

	clickOn_ContactUs_Button() {
		cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
	}
}

export default HomePage_PO;
