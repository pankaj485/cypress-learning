/// <reference types="cypress" />

describe("Using custom command to verify if the product is present ", () => {
	beforeEach(() => {
		cy.visit("https://www.automationteststore.com");
	});

	// it("implementing custom command ", () => {
	// 	cy.selectProduct("Absolue Eye Precious Cells");
	// });

	it("first hair product ", () => {
		cy.get('a[href*="product/category"]').contains("Hair Care").click();
		cy.visitCustomHairProduct("Seaweed Conditioner");
		cy.log("product is found  ");
	});

	it("second hair product ", () => {
		cy.get('a[href*="product/category"]').contains("Hair Care").click();
		cy.visitCustomHairProduct("Pantene Pro-V Conditioner, Classic Care");
		cy.log("product is found  ");
	});

	it("third hair product ", () => {
		cy.get('a[href*="product/category"]').contains("Hair Care").click();
		cy.visitCustomHairProduct("Eau Parfumee au The Vert Shampoo");
		cy.log("product is found  ");
	});
});
