/// <reference types="cypress" />

describe("Test mouse actions", () => {
	it("Scroll into the view ", () => {
		cy.visit("http://www.webdriveruniversity.com");

		// scroll to the selector and then cick it
		cy.get("#actions")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click({ force: true });
	});

	it("Drag and drop", () => {
		cy.visit("http://www.webdriveruniversity.com");

		// scroll to the selector and then cick it
		cy.get("#actions")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click({ force: true });

		//  triggering mouse down event to trigger click event
		cy.get("#draggable").trigger("mousedown", { which: 1 });

		//  while click event is still running, moving the mouse to the selector (i.e dragging)
		//  and then when the mouse is moved to desired location, trigger the mouseup
		//  then it will ensure the drag and drop event as complete
		cy.get("#droppable")
			.trigger("mousemove")
			.trigger("mouseup", { force: true });
	});

	it("Drag and drop", () => {
		cy.visit("http://www.webdriveruniversity.com");

		// scroll to the selector and then cick it
		cy.get("#actions")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click({ force: true });

		// performing double click on the selector
		cy.get("#double-click").dblclick();
	});

	it("clicking and holding mouse ", () => {
		cy.visit("http://www.webdriveruniversity.com");

		// scroll to the selector and then cick it
		cy.get("#actions")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click({ force: true });

		// performing double click on the selector
		cy.get("#double-click").dblclick();
	});

	it.only("clicking and holding mouse ", () => {
		cy.visit("http://www.webdriveruniversity.com");

		// scroll to the selector and then cick it
		cy.get("#actions")
			.scrollIntoView()
			.invoke("removeAttr", "target")
			.click({ force: true });

		cy.get("#click-box")
			.trigger("mousedown", { which: 1 })
			.then(($element) => {
				expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
			});
	});
});
