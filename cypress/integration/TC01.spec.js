describe("Login and Logout testing", function (){
    it('Login', function () {
        cy.SingIn();
    });

    it('Logout', function () {
        cy.SingOut();
    });
})
