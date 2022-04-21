/// <reference types="cypress" />

describe("Alias and Invoke", () => {
	it("Validate a specifi hair care product", () => {
		cy.visit("https://automationteststore.com/");
		cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

		// from the headers select the first one and then invoke and extract the text of the header and then using alias command to use it like variable
		cy.get(".fixed_wrapper .prdocutname")
			.eq(0)
			.invoke("text")
			.as("productThumbnail");

		// validating that the productThumbnail has length >5
		cy.get("@productThumbnail").its("length").should("be.greaterThan", 5);

		// validating that the productThumbnail contains the passed string
		cy.get("@productThumbnail").should("contain", "Seaweed Conditioner");
	});
});
