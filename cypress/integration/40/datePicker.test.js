/// <reference types="cypress" />

describe("Test Date picker via webdriveruni", () => {
	beforeEach(() => {
		cy.visit("http://webdriveruniversity.com/");
		cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
		// removing navbar element
		cy.get(".navbar").invoke("remove");
		cy.get("#datepicker").click();
	});

	it.only("select date from teh datepicker", () => {
		let date = new Date();

		// adding to current day
		date.setDate(date.getDate() + 100);

		let futureYear = date.getFullYear();
		// formatting the month in proper way
		let futureMonth = date.toLocaleString("defalut", { month: "long" });
		let futureDay = date.getDate();

		// logging info regarding future dates
		cy.log("future year to select: " + futureYear);
		cy.log("future month to select: " + futureMonth);
		cy.log("future date to select: " + futureDay);

		const selectMonthAndYear = () => {
			cy.get(".datepicker-dropdown")
				// selecting the date picker icon which is first one including the following class
				.find(".datepicker-switch")
				.first()
				.then((currentDate) => {
					// if the ui doesn't include the futureYear we have choose to then it will keep of clicking on the next icon untill it matches the year
					if (!currentDate.text().includes(futureYear)) {
						cy.get(".next").first().click();
					}
				})
				.then((currentDate) => {
					cy.get(".datepicker-dropdown")
						.find(".datepicker-switch")
						.first()
						.then((currentDate) => {
							// if the ui doesn't include the futureMonth we have choose to then it will keep of clicking on the next icon untill it matches the month
							if (!currentDate.text().includes(futureMonth)) {
								cy.get(".next").first().click();
								selectMonthAndYear();
							}
						});
				});
		};

		const seelctFutureDay = () => {
			// picking or confirming the future date finally
			cy.get('[class="day"]').contains(futureDay).click();
		};

		selectMonthAndYear();
		seelctFutureDay();
	});
});
