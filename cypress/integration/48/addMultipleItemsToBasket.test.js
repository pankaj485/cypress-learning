/// <reference types="cypress" />
import AutoHomePage_PO from "../../support/pageObject/automationTestStore/AutoHomePage_PO.test";
import AddItems_PO from "../../support/pageObject/automationTestStore/AddItems_PO.test";

describe("Add multiple items to basket", () => {
	const autoHomePage_PO = new AutoHomePage_PO();
	const addItems_PO = new AddItems_PO();

	before(() => {
		cy.fixture("products").then((data) => {
			globalThis.productData = data;
		});
	});

	beforeEach(() => {
		autoHomePage_PO.visitHomepage();
		autoHomePage_PO.clickOn_Hair_Care_Button();
	});

	it("Add specific items to basket", () => {
		addItems_PO.addItems_To_Cart();
		addItems_PO.check_Cart();
	});
});
