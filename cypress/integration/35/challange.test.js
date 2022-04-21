/// <reference types="cypress" />

// interact by 2nd select maiven acc to value and testing acc to text and perform assertion for both

describe("dropdown mode challange ", () => {
	it("select options based on values and text and also perform assertions ", () => {
		cy.visit("http://www.webdriveruniversity.com");

		cy.get("#dropdown-checkboxes-radiobuttons")
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.log("selecting none");

		// asserting and  selceting based on value validating text contents
		cy.get("#dropdowm-menu-2").as("valueMaveen");
		cy.get("@valueMaveen").select("maven").should("have.value", "maven");
		cy.log("selected based on value");

		// asserting and selcting based on text and validating text contents
		cy.get("#dropdowm-menu-2").as("valueMaveen");
		cy.get("@valueMaveen").select("TestNG").should("contain", "TestNG");
		cy.log("selected based on text");
	});
});
