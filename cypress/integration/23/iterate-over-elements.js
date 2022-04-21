/// <reference types="cypress" />

describe("Iterate over elements", () => {
	it("Log information of all hair care products", () => {
		cy.visit("https://automationteststore.com/");
		cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

		cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
			cy.log("Index: " + index + " : " + $el.text());
		});
	});

	it("Add specific product to basket", () => {
		cy.visit("https://automationteststore.com/");
		cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

		cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
			if ($el.text().includes("Curls to stright Shampoo")) {
				// we need to use cypress method to trigger the click, we can't directly select $el and use click but has to be yeilded and wrapped so that we can use cypress click method there
				cy.wrap($el).click();
			}
		});
	});
});
