/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
	it("Should fail to submit form", () => {
		cy.visit("https://www.automationteststore.com/");
		cy.get(".info_links_footer > :nth-child(5) > a").click();
		cy.get("#ContactUsFrm_first_name").type("pank");
		cy.get("#ContactUsFrm_email").type("pank@pankmail.com");
		cy.get("#ContactUsFrm_enquiry").type(
			"this is lorem ipsum equivalnet text which means these are texts but these are not the valid texts so we can't even see or read the contents and consider it as a valid text field "
		);
		cy.get(".col-md-6 > .btn").click();
	});
});
