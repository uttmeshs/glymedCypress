import Base from "../pages/base";
import LoginPage from "../pages/loginPage";

describe('validate Retail user is able to login', () => {
	const base=new Base();
	const loginPage = new LoginPage();

	

            it(" Retail user login  ", () => {
                base.gotoURL();
				
				loginPage.getEmail().focus().type('glymed+retail@tech9.com');
				loginPage.getPassword().focus().type('tech9team');
				loginPage.getsignInButton().click({force:true});
				cy.wait(5000);
				cy.get('label').click() 
				cy.contains('REGEN Retail Partner')
				loginPage.logout()
			} 
            )
})