/// <reference types="cypress" />

import HomePage_PO from "../../support/pageObject/webDriverUni/Homepage_PO.test";
import ContactUs_PO from "../../support/pageObject/webDriverUni/ContactUs_PO.test";

describe("Test Contact Us form via WebdriverUni", () => {
	// creating object from the page object modeling class
	const homepage_PO = new HomePage_PO();
	const contactUs_PO = new ContactUs_PO();

	beforeEach(() => {
		// accessing methods from the object
		homepage_PO.visitHomepage();
		homepage_PO.clickOn_ContactUs_Button();
	});

	it("Should be able to submit a successful submission via contact us form", () => {
		// accessing methods from the object
		contactUs_PO.contact_Form_Submit();
	});
});
