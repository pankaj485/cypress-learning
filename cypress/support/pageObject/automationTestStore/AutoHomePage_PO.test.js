/// <reference types="cypress" />

// _PO means page object

class AutoHomePage_PO {
	// create command to visit webpage
	visitHomepage() {
		cy.visit(Cypress.env("automationStoreHomePage"));
	}

	clickOn_Hair_Care_Button() {
		cy.get('a[href*="product/category"]').contains("Hair Care").click();
	}
}

export default AutoHomePage_PO;
