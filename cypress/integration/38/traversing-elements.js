/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
	beforeEach(() => {
		cy.visit("http://webdriveruniversity.com/");
		cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
		// removing navbar element
		cy.get(".navbar").invoke("remove");
	});

	it("children() to get the children of DOM elements", () => {
		// traversing the children and then select child having particular class name and containing given text string
		cy.get(".traversal-breadcrumb")
			.children(".active")
			.should("contain", "Contact Us");
	});

	it("closest() to validate the closest ancestor DOM element", () => {
		cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
	});

	it("eq() to retrieve a specific element based on index", () => {
		// select list, pick particular element and then make sure it contains the text
		cy.get(".traversal-drinks-list > *").eq(2).should("contain", "Milk");
	});

	it("filter() to retrieve DOM elements that match a specific selector", () => {
		// get selector and select it's child and then filter out element which contains class of passed class
		cy.get(".btn-group-toogle > *")
			.filter(".active")
			.should("contain", "Button-1");
	});

	it("find() to retrieve DOM elements of a given selector", () => {
		// get an element, look for li inside of an element, look for anchor inside of li, annotate that the length is equal to passed value
		cy.get(".traversal-pagination")
			.find("li")
			.find("a")
			.should("have.length", 7);
	});

	it("first() to retrieve the first DOM element within elements ", () => {
		// get elements haivng childs and then access first element and asserting
		cy.get(".traversal-table > tbody > tr > td")
			.first()
			.should("contain", "Andy");
	});

	it("last() to retrieve the last DOM element within elements", () => {
		// get element haivng childs and then access last element and asserting
		cy.get(".traversal-table > tbody > tr > td")
			.last()
			.scrollIntoView()
			.should("contain", "Scott");
	});

	it("nextAll() to get all of the next sibling DOM elements within elements", () => {
		// get element haivng siblings and then access siblings element and asserting
		cy.get(".traversal-drinks-list")
			.contains("Tea")
			.nextAll()
			.should("have.length", 3);
	});

	it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
		// get the items in the range of #coffee and #milk but no incl #milk
		cy.get("#coffee").nextUntil("#milk");
	});

	it("not() to remove DOM element(s) from the set of elements", () => {
		// selecting an element with childs and then apply the condition that the partiuclar class should not be iclluded and then asserting that the class associated with not is not present
		cy.get(".traversal-button-states > button")
			.not(".disabled")
			.should("not.have.class", "disabled");
	});

	it("parent() To get parent DOM element of elements", () => {
		// selecting an element and tarageting parent and assert to make sure the parent contains partiuclar text
		cy.get(".traversal-mark ")
			.parent()
			.should("contain", "Lorem ipsum dolor sit amet, consectetur");
	});

	it("parents() to get parents DOM element of elements", () => {
		// selectig and element and then mark all of it's parents and assering to confirm wheather the parents list matches on of parent as blockquote
		cy.get(".traversal-cite").parents().should("match", "blockquote");
	});

	it("prev() to get the previous sibling DOM element within elements", () => {
		// selecting an element's previous element and asserting to make sure it contains text Espresso
		cy.get("#sugar").prev().contains("Espresso");
	});

	it("prevAll() to get all previous sibling DOM elements within elements", () => {
		// selecting an element and get all the previous siblings and asserting that they count as 2
		cy.get(".sales").prevAll().should("have.length", 2);
	});

	it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {});

	it.only("siblings() To get all sibling DOM elements of elements", () => {
		// selecting an element and get all the siblings and assert to verify that total sibligs are counted as 3
		cy.get(".traversal-button-other-states .active")
			.siblings()
			.should("have.length", 3);
	});
});
