// uncheck third checkbox and validate that it is unchecked

/// <reference types="cypress" />

describe("Handling 3rd Checkbox ", () => {
	it("unchecking 3rd option and then verify that it is unchecked ", () => {
		cy.visit(
			"http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
		);

		// getting and aliasing checckbox
		cy.get("#checkboxes > :nth-child(5) > input").as("option-3");

		// checking the checkbox
		cy.get("@option-3").check();

		// verifying that the checkbox is checked
		cy.get("@option-3").should("be.checked");

		// unchecking the checkbox
		cy.get("@option-3").uncheck();

		// verifying that the checkbox is checked
		cy.get("@option-3").should("not.be.checked");
	});


	it("unchecking 3rd option and then verify that it is unchecked ", () => {
		cy.visit(
			"http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
		);

		// getting and aliasing checckbox
		cy.get("#checkboxes > :nth-child(5) > input").as("option-3");

		// checking the checkbox
		cy.get("@option-3").check();

		// verifying that the checkbox is checked
		cy.get("@option-3").should("be.checked");

		// unchecking the checkbox
		cy.get("@option-3").uncheck();

		// verifying that the checkbox is checked
		cy.get("@option-3").should("not.be.checked");
	});
});
