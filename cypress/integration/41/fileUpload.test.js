/// <reference types="cypress" />

import "cypress-file-upload";

describe("Test file upolad via webdriveruni", () => {
	beforeEach(() => {
		cy.visit("http://webdriveruniversity.com/");
		cy.get("#file-upload")
			.invoke("removeAttr", "target")
			.click({ force: true });
		// removing navbar element
		cy.get(".navbar").invoke("remove");
	});

	it("upload a file ...", () => {
		cy.fixture("laptop.png", "base64").then((fileContent) => {
			cy.get("#myFile").attachFile(
				{
					fileContent,
					// means name of file being used
					fileName: "laptop.png",
					// means type of file being used
					mimeType: "image/png",
				},
				{
					// related to the field where we will upolad the file, in case of this we are having in input
					uploadType: "input",
				}
			);
		});
		// clicking on the submit button after upolad
		cy.get("#submit-button").click();
	});
});
