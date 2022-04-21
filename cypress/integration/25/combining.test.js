/// <reference types="cypress" />

describe("Alias and Invoke", () => {
	it("Printing all the sales and non sales items price", () => {
		cy.visit("https://automationteststore.com/");
		cy.get(".thumbnail").as("productThumbnail");

		// highlighting all the non-sale products
		cy.get("@productThumbnail")
			.find(".oneprice")
			.each(($el, index, $list) => {
				cy.log("no sale: " + $el.text());
			});

		cy.get("@productThumbnail")
			.find(".pricenew")
			.each(($el, index, $list) => {
				cy.log("sale: " + $el.text());
			});
	});

	let totalItemsPrice = 0;
	it("print pice only  non-sale item", () => {
		cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
		cy.get("@itemPrice").then(($linkText) => {
			// splitting the promise item based on the symbol starting with so that only price is found
			const itemPrice = $linkText.split("$");
			let salesItemsTotal = 0;

			for (let i = 0; i < itemPrice.length; i++) {
				cy.log(itemPrice[i]);
				salesItemsTotal += Number(itemPrice[i]);
			}

			cy.log("total non selling: " + salesItemsTotal);
			totalItemsPrice += salesItemsTotal;
		});
	});

	it("print sale item only", () => {
		// cy.visit("https://automationteststore.com/");
		cy.get(".thumbnail").find(".pricenew").invoke("text").as("itemPrice");

		cy.get("@itemPrice").then(($linkText) => {
			let nonSalesItem = 0;
			const itemPrice = $linkText.split("$");

			for (let i = 0; i < itemPrice.length; i++) {
				cy.log(itemPrice[i]);
				nonSalesItem += Number(itemPrice[i]);
			}

			cy.log("non sales item: ", nonSalesItem);
			totalItemsPrice += nonSalesItem;
		});
	});

	it("print total price", () => {
		cy.log("total with sales price : " + totalItemsPrice);
	});
});
