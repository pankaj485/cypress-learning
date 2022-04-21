/// <reference types="cypress" />

describe("Handling Iframes and Modals", () => {
	it("handling iframes on webdriveruniversity", () => {
		cy.visit("http://www.webdriveruniversity.com");
		cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

		cy.get("#frame").then(($iframe) => {
			// isImportant
			const body = $iframe.contents().find("body");
			cy.wrap(body).as("iframe");
		});

		// locating and clicking the button of the iframe
		cy.get("@iframe").find("#button-find-out-more").click();

		// locating popup modal
		cy.get("@iframe").find("#myModal").as("modal");

		// verifying modal's text content
		cy.get("@modal").should(($expectedText) => {
			const text = $expectedText.text();
			expect(text).to.include(
				"Welcome to webdriveruniversity.com we sell a wide range of electrical goods "
			);
		});

		// clicking on close button on the alerts
		cy.get("@modal").contains("Close").click();
	});
});
