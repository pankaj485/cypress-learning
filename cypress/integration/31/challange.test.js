/// <reference types="cypress" />

// todo click on the cancel button of the confirm box and print the message

describe("handling cancel event", () => {
	it("challange to handle cancel event on confirm alert box", () => {
		cy.visit("https://www.webdriveruniversity.com/");
		cy.get("#popup-alerts")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#button4").click();

		cy.on("window:confirm", (stringPresent) => {
			// if we return true then it will click the true button while on returing false it will click the other button
			return false;
		});

		// validating that correct message is appeared
		cy.get("#confirm-alert-text").contains("You pressed Cancel!");
	});
});
