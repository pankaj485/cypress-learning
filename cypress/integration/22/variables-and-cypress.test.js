/// <reference types="cypress" />

describe("verifying vairables, cypress commands and jQurey commands", () => {
	it("navigating to specific product pages", () => {
		cy.visit("https://www.automationteststore.com/");
		// const makeupLink = cy.get("a[href*='https://automationteststore.com/product/category&path=']").contains("Makeup");
		// const makeupLink = cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=36']").should('exist')
		const makeupLink = cy
			.get(
				"a[href*='https://automationteststore.com/index.php?rt=product/category&path=']"
			)
			.contains("Makeup");

		const skinCareLink = cy
			.get(
				"a[href*='https://automationteststore.com/index.php?rt=product/category&path=']"
			)
			.contains("Skincare");

		skinCareLink.click();
	});

	it.only("navigating toproduct pages and printing text with promise", () => {
		cy.visit("https://www.automationteststore.com/");
		cy.get(
			"a[href*='https://automationteststore.com/index.php?rt=product/category&path=']"
		)
			.contains("Makeup")
			.click();

		cy.get("h1 > .maintext").then((foundHeader) => {
			const contents = foundHeader.text();
			cy.log("header content is", contents);
			expect(contents).is.eq("Makeup");
		});
	});
});
