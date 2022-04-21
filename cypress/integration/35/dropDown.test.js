/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
	it("Select specific values via select dropdown lists ", () => {
		// cy.visit.should("have.value")("http://www.webdriveruniversity.com");
		cy.visit("http://www.webdriveruniversity.com");

		cy.get("#dropdown-checkboxes-radiobuttons")
			.invoke("removeAttr", "target")
			.click({ force: true });

		// selecting a dropdown menu first and then clicking an option from there from options
		cy.get("#dropdowm-menu-1").select("c#");

		// validating that the dropdown menu contains particular text
		cy.get("#dropdowm-menu-3")
			.select("JavaScript")
			.should("have.value", "javascript");

		// cy.get("#dropdowm-menu-2").select("Eclipse").should("have.text", "Eclipse");
	});
});
