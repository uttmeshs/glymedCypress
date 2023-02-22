class Common{

	procheckout(productName){
		cy.get('.css-2tmutr > :nth-child(3)').focus().click()
		cy.get('.ProductQuickLook_quick-view-close__uzCcg > .MuiButton-root').focus().click()
		cy.get('.Header_cart-button__er47t > .MuiButtonBase-root').focus().click()
		cy.contains(productName)
		cy.get('.css-8dwvt > :nth-child(2) > .MuiButton-root').focus().click()
		cy.contains(productName)
		cy.get('.MuiSelect-select').click({force:true})
		cy.get('[data-value="UPS GROUND"] > .EditShipping_menuItem__QjN3b > p').click()
		cy.contains('Continue to Payment').click()
  
		cy.contains('Review your order').click()
  
		cy.contains('Place your order').click()
  
		cy.contains("Don't use point").click()
  
		cy.contains('I agree').click()
		cy.wait(5000)
		cy.contains('Thank you for your order!')
	}

	retailCheckout(productName){
		cy.get('.css-2tmutr > :nth-child(3)').focus().click()
		cy.get('.ProductQuickLook_quick-view-close__uzCcg > .MuiButton-root').focus().click()
		cy.get('.Header_cart-button__er47t > .MuiButtonBase-root').focus().click()
		cy.contains(productName)
		cy.get('.css-8dwvt > :nth-child(2) > .MuiButton-root').focus().click()
		cy.contains(productName)
		cy.get('.MuiSelect-select').click({force:true})
		cy.get('[data-value="UPS GROUND"] > .EditShipping_menuItem__QjN3b > p').click()
		cy.contains('Continue to Payment').click()
  
		cy.contains('Review your order').click()
		cy.contains('Place your order').click()
		cy.wait(5000)
		cy.contains('Thank you for your order!')
	}

	schoolCheckout(productName){
		cy.get('.css-2tmutr > :nth-child(3)').focus().click()
		cy.get('.ProductQuickLook_quick-view-close__uzCcg > .MuiButton-root').focus().click()
		cy.get('.Header_cart-button__er47t > .MuiButtonBase-root').focus().click()
		cy.contains(productName)
		cy.get('.css-8dwvt > :nth-child(2) > .MuiButton-root').focus().click()
		cy.contains(productName)
		cy.get('.MuiSelect-select').click({force:true})
		cy.get('[data-value="UPS GROUND"] > .EditShipping_menuItem__QjN3b > p').click()
		cy.contains('Continue to Payment').click()
  
		cy.contains('Review your order').click()
		cy.contains('Place your order').click()
		cy.contains('I agree').click()
		cy.wait(5000)
		cy.contains('Thank you for your order!')
	}
}export default Common;