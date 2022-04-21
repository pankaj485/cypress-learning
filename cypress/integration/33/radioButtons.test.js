/// <reference types="cypress"/>

describe("Verify radio buttons via webdriveruni", () => {
	beforeEach(() => {
		// visiting main page
		cy.visit("http://www.webdriveruniversity.com");

		// visiting navigation page
		cy.get("#dropdown-checkboxes-radiobuttons")
			.invoke("removeAttr", "target")
			.click({ force: true });
	});

	it("checking radio buttons ", () => {
		//  first finding all the radio buttons and then selecting the first one and then checking the button
		cy.get("#radio-buttons").find("[type='radio']").first().check();
		// finding all the radio buttons and then accessing child according to index starting from 0
		cy.get("#radio-buttons").find("[type='radio']").eq(2).check();
	});

	it("validating different states of specific radio buttons ", () => {});
});
