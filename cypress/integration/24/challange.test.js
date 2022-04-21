/// <reference types="cypress" />

describe("Alias and Invoke", () => {
	it("output the length", () => {
		cy.visit("https://automationteststore.com/");

		// count num of product thumbnail, i.e length on homepage with assertion

		cy.get(".thumbnail ").as("productThumbnail");
		cy.get("@productThumbnail").should("have.length", 16);
	});

	it.only("vlaidate the cart icon with correct title", () => {
		cy.visit("https://automationteststore.com/");
		// validate product cart by 'add to cart' text using assertion
		cy.get(".thumbnail ").as("productThumbnail");
		cy.get("@productThumbnail").should("have.length", 16);
		// find relevant element and then find title attribute and invoke it
		cy.get("@productThumbnail")
			.find(".productcart")
			.invoke("attr", "title")
			.should("include", "Add to Cart");
	});
});
