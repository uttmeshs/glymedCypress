
class Base {

	gotoURL()
	{
		cy.visit('https://uat.glymedplus.com/login')
		cy.wait(3000);
		cy.contains('I Accept').click({force:true})
		cy.wait(3000)
		//cy.get('.MuiBox-root > .MuiButton-root').click({force:true})
		cy.get('.Header_nav-right-box__U1ilV > .MuiButton-root').click()
		cy.wait(1000);
		cy.contains('Personal Service, Personalized Care')
		cy.wait(1000);
	}
	
}export default Base;
