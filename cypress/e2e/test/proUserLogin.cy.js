import Base from "../pages/base";
import LoginPage from "../pages/loginPage";

describe('validate Pro user is able to login', () => {
	const base=new Base();
	const loginPage = new LoginPage();

	

            it(" Pro user login  ", () => {
                base.gotoURL();
				
				loginPage.getEmail().focus().type('glymed@tech9.com');
				loginPage.getPassword().focus().type('tech9team');
				loginPage.getsignInButton().click({force:true});
				cy.wait(5000);
				cy.get('label').click() 
				cy.contains('REGEN Pro Member')
				loginPage.logout()
			} 
            )
})