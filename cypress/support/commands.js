// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- custom command by tutor
Cypress.Commands.add("selectProduct", (productName) => {
	cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
		if ($el.text().includes(productName)) {
			cy.log("found matching item");
			cy.wrap($el).click();
		}
	});
});

// --  This is challange command from section 44

Cypress.Commands.add("visitCustomHairProduct", (passedString) => {
	cy.get('a[href*="product&path=52&product_id="]')
		.contains(passedString)
		.as("productLink");

	cy.get("@productLink").click();
	cy.should("contain", passedString);
});

// -- commands for section 45

Cypress.Commands.add("addProductToBasket", (productName) => {
	cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
		if ($el.text() === productName) {
			cy.log(" ||||| matched index  ||||| " + index);
			cy.log($el.text());
			cy.get(".productcart").eq(index).click();
		}
	});
});

Cypress.Commands.add("testPrintCommand", (productName) => {
	cy.log("printing from custom command", productName);
});
