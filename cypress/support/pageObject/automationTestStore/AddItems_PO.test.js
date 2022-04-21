class AddItems_PO {
	addItems_To_Cart() {
		productData.productName.forEach((product) => {
			cy.addProductToBasket(product);
		});
	}

	check_Cart() {
		cy.get(".dropdown-toggle > .fa").click();
	}
}

export default AddItems_PO;
