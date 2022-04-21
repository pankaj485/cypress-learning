/// <reference types="cypress" />

describe("validate properties of contact us page", () => {
	beforeEach("visit contact us page", () => {
		cy.visit("https://automationteststore.com/index.php?rt=content/contact");
	});

	it("using cypress command and chaining", () => {
		// finding an particular id and then make sure it has right text and then find an id particualar id and making sure that the contents are present there
		cy.contains("#ContactUsFrm", "Contact Us Form")
			.find("#field_11")
			.should("contain", "First name");
	});

	it("jQurey Apporach", () => {
		cy.contains("#ContactUsFrm", "Contact Us Form").then((contactForm) => {
			const contactFormContent = contactForm.find("#field_11");
			expect(contactFormContent).to.contain("First name");
		});
	});

	it("Embeded commands (clousre)", () => {
		cy.contains("#ContactUsFrm", "Contact Us Form").then((contactForm) => {
			const contactFormContent = contactForm.find("#field_11");
			expect(contactFormContent).to.contain("First name");
			cy.get("#field_11").then((field_11) => {
				cy.log(field_11.text());
				expect(field_11).to.contain("First name");
			});
		});
	});
});
