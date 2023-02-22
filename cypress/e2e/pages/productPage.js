class ProductPage{

	clickProduct(){
		cy.contains('Products').click()
		cy.wait(2000)
	}
	
	selectProduct(productName){
		cy.get('.CustomerNotification_header__2ZNU0 > .MuiButtonBase-root').should('be.enabled').click({force:true})
		cy.get('#GM103 > .product-listing-footer > .MuiButton-root').focus().click({force:true})
		cy.contains(productName)
		cy.get('#product-quantity-GM103').focus().type('2')
	}


}export default ProductPage