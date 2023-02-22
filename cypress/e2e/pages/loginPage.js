class LoginPage{


	getEmail(){
		return cy.get('input[name="email"]');
	}
	getPassword(){
		return cy.get('input[name="password"]');
	}

	getsignInButton(){
		return cy.get('.SignIn_gy-signIn-label__o-KeW > .MuiButton-root')
	}
	
	logout(){
		cy.contains('Sign Out').click()
	}

} export default LoginPage;


