/// <reference types="cypress" />

describe("Handling Checkboxes ", () => {
	it("handling checkbox on webdriveruniversity", () => {
		cy.visit(
			"http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
		);

		// checkbox should be checked
		cy.get("#checkboxes > :nth-child(3) > input").check();

		// verifying that the checkbox is checked or not
		// cy.get("#checkboxes > :nth-child(1) > input").should("be.checked");
		// cy.get("#checkboxes > :nth-child(2) > input").should("not.be.checked");

		cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
		cy.get("@option-1").check();
		cy.get("@option-1").check().should("be.checked");
		cy.get("@option-1").uncheck();
	});

	it.only("handling checkbox on webdriveruniversity", () => {
		cy.visit(
			"http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
		);

		cy.get("input[type=checkbox]")
			.check(["option-1", "option-2", "option-3", "option-4"])
			.should("be.checked");
	});
});
