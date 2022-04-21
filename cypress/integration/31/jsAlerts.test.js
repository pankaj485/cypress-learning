/// <reference types="cypress" />

describe("Handle js alerts", () => {
	it("confirm js alert contains the correct text", () => {
		cy.visit("http://www.webdriveruniversity.com");
		cy.get("#popup-alerts")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#button1").click();

		cy.on("window:alert", (stringPresent) => {
			// asserting that the alert box has the text we are expecting
			expect(stringPresent).to.equal("I am an alert box!");
		});
	});

	it.only("confirm js confirm alert box works correctly when clicking ok", () => {
		cy.visit("http://www.webdriveruniversity.com");
		cy.get("#popup-alerts")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#button4").click();

		cy.on("window:confirm", (stringPresent) => {
			// if we return true then it will click the true button while on returing false it will click the other button
			return true;
		});

		// asserting that the alert box has the text we are expecting
		cy.get("#confirm-alert-text").contains("You pressed OK!");
	});
});
