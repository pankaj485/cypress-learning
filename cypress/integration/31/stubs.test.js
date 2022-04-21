/// <reference types="cypress" />

describe("stubs in cypress", () => {
	it("implementing stubs feature", () => {
		cy.visit("http://www.webdriveruniversity.com");
		cy.get("#popup-alerts")
			.invoke("removeAttr", "target")
			.click({ force: true });

		//  creating a stub for an event
		const stub = cy.stub();
		// triggering stub for an event
		cy.on("window:confirm", stub);

		cy.get("#button4")
			.click()
			.then(() => {
				// check if stub with particular index is having partiuclar text
				// isImportant
				expect(stub.getCall(0)).to.be.calledWith("Press a button!");
			})
			.then(() => {
				// clicking ok button since true returns ok
				return true;
			})
			.then(() => {
				// validating with assertion
				cy.get("#confirm-alert-text").contains("You pressed OK!");
			});
	});
});
