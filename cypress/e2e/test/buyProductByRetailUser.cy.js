import Base from "../pages/base";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productpage";
import Common from "../pages/common";

describe('validate Retail user is able to buy product', () => {
	const base=new Base();
	const loginPage = new LoginPage();
	const productPage = new ProductPage();
	const common = new Common();
	

            it(" Retail user is able to buy product  ", () => {
				var productName= "Skin Astringent"

                base.gotoURL();
				loginPage.getEmail().focus().type('glymed+retail@tech9.com');
				loginPage.getPassword().focus().type('tech9team');
				loginPage.getsignInButton().click({force:true});
				cy.wait(5000);
				cy.get('label').click() 
				cy.contains('REGEN Retail Partner')
				productPage.clickProduct()
				
				cy.get('.CustomerNotification_header__2ZNU0 > .MuiButtonBase-root').should('be.enabled').click({force:true})
				cy.get('#GM21 > .product-listing-footer > .MuiButton-root').focus().click({force:true})
	  			cy.contains('Skin Astringent No. 10 (GM21)')
	  			cy.get('#product-quantity-GM21').focus().type('2')

				common.retailCheckout(productName);
				cy.end();
			} 
            )
})