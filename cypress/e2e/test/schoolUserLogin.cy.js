import Base from "../pages/base";
import LoginPage from "../pages/loginPage";

describe('validate School user is able to login', () => {
	const base=new Base();
	const loginPage = new LoginPage();

	

            it(" School user login  ", () => {
                base.gotoURL();
				
				loginPage.getEmail().focus().type('taylor.roper@tech9.co');
				loginPage.getPassword().focus().type('tech9team');
				loginPage.getsignInButton().click({force:true});
				cy.wait(5000);
				cy.get('label').click() 
				cy.contains('REGEN School Student')
				loginPage.logout()
			} 
            )
})