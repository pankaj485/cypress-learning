/// <reference types="cypress" />

// challange: type character 'g', submit and asset is url contains the item

describe("Test if the suggestion congains particular block", () => {
	it("check if suggestion includes grapes", () => {
		cy.visit("http://www.webdriveruniversity.com");

		cy.get("#autocomplete-textfield")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#myInput").type("G");

		cy.get("#myInputautocomplete-list > *")
			.each(($el, index, $list) => {
				const product = $el.text();
				const productToSelect = "Grapes";

				if (product === productToSelect) {
					$el.click();
					cy.get("#submit-button").click();
				}
			})
			.then(() => {
				cy.get("#myInput").type("B");

				cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
					const product = $el.text();
					const productToSelect = "Black beans";

					if (product === productToSelect) {
						$el.click();
						cy.get("#submit-button").click();
					}
				});
			});
	});
});
