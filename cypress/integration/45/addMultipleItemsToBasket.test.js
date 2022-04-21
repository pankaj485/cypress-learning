/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
	before(() => {
		cy.fixture("products").then((data) => {
			globalThis.productData = data;
		});
	});

	beforeEach(() => {
		cy.visit("https://www.automationteststore.com");
		cy.get('a[href*="product/category"]').contains("Hair Care").click();
	});

	it("Add specific items to basket", () => {
		// cy.addProductToBasket(productData.productName[0]);
		// cy.addProductToBasket(productData.productName[1]);
		// cy.addProductToBasket(productData.productName[2]);

		// globalThis.productData.forEach((product) => {
		productData.productName.forEach((product) => {
			cy.addProductToBasket(product);
		});

		cy.get(".dropdown-toggle > .fa").click();
	});
});
