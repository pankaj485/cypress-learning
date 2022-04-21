/// <reference types="cypress" />

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
	it("Select specific product via autocomplete list", () => {
		cy.visit("http://www.webdriveruniversity.com");

		cy.get("#autocomplete-textfield")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#myInput").type("A");

		// select dropdown list and all of it's child by *
		cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
			// define product
			const product = $el.text();

			// pick an item to be choosen
			const productToSelect = "Avacado";

			// if current element is same as selected product then click and validate
			if (product === productToSelect) {
				// clicking on the particular item
				$el.click();

				// submit the item
				cy.get("#submit-button").click();

				// checking on submiting, if the item which is selected is present in the url
				cy.url().should("include", productToSelect);
			}
		});
	});
});
