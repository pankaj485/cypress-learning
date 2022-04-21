/// <reference types="cypress" />

describe("Handling data via webdriver uni", () => {
	beforeEach(() => {
		cy.visit("http://webdriveruniversity.com/");
		cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
		// removing navbar element
		cy.get(".navbar").invoke("remove");
	});
	it("Calculate and assert the total age of al users", () => {
		let userDetails = [];
		let totalAge = 0;
		cy.get("#thumbnail-1  td")
			.each(($el, index, $list) => {
				userDetails[index] = $el.text();
			})
			.then(() => {
				for (let i = 0; i < userDetails.length; i++) {
					// it will add number to number only and let go of strings

					if (Number(userDetails[i])) {
						totalAge += Number(userDetails[i]);
					}
				}
				// cy.log("total age: " + totalAge);
				expect(totalAge).to.eq(322);
			});
	});
	it.only("calculate and asssert the age of a given user based on last name", () => {
		// cy.get("tr > th").each(($el, index, $list) => {
		// 	cy.log($el.text());
		// });

		// cy.get("#thumbnail-1 tr td:nth-child(2)").should("exist");
		cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
			const user = $el.text();
			if (user.includes("Woods")) {
				cy.log("matched index: " + index);
				// accessing the element which matches the condition by the help of index it falls under and then accessing the next element after that using next()
				cy.get("tr td:nth-child(2)")
					.eq(index)
					.next()
					.then((yeildedAge) => {
						// yeilding value got next() and logging
						const userAge = Number(yeildedAge.text());
						cy.log("age: " + userAge);
						expect(userAge).to.eq(80);
					});
			}
		});
	});
});
