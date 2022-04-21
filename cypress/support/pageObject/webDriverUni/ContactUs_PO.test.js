/// <reference types="cypress" />

// _PO means page object

class ContactUs_PO {
	contact_Form_Submit() {
		cy.get('[name="first_name"]').type("Pank");
		cy.get('[name="last_name"]').type("Aj");
		cy.get('[name="email"]').type("pank@pankmail.com");
		cy.get("textarea.feedback-input").type(
			"this is lorem ipsum equivalnet text which means these are texts but these are not the valid texts so we can't even see or read the contents and consider it as a valid text field "
		);
		cy.get('[type="submit"]').click();
	}
}

export default ContactUs_PO;
