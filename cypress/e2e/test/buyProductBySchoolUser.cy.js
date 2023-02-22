import Base from "../pages/base";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productpage";
import Common from "../pages/common";

describe('validate School user is able to buy product', () => {
	const base=new Base();
	const loginPage = new LoginPage();
	const productPage = new ProductPage();
	const common = new Common();
	

            it(" School user is able to buy product  ", () => {
				var productName= "Oxygen Power Booster"
                base.gotoURL();
				
				loginPage.getEmail().focus().type('taylor.roper@tech9.co');
				loginPage.getPassword().focus().type('tech9team');
				loginPage.getsignInButton().click({force:true});
				cy.wait(5000);
				cy.get('label').click() 
				cy.contains('REGEN School Student')
				productPage.clickProduct()
				
				cy.get('.CustomerNotification_header__2ZNU0 > .MuiButtonBase-root').should('be.enabled').click({force:true})
				cy.get('#GM103 > .product-listing-footer > .MuiButton-root').focus().click({force:true})
				cy.contains(productName)
				cy.get('#product-quantity-GM103').focus().type('2')

				common.schoolCheckout(productName);
				cy.end();
			} 
            )
})