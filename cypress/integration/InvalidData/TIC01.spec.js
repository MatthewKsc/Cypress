describe('Testing register and login validation', function (){

    const invalidUser = {
        username: 'Matthewksc',
        email: 'random@sth',
        password: 'fake'
    };

    before('visit', function (){
        cy.visit("/#/login?_k=ahhw5f");
        cy.title().should('eq', 'Conduit');
        cy.location('protocol').should('eq','https:')
    })

    it('login validation', function () {
        cy.get('form').within(($form)=>{
            cy.get('input').first().type(invalidUser.email);
            cy.get('input').eq(1).type(invalidUser.password);
            cy.root().submit();
        });

        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')
            .and('be.visible');

        cy.location('hash')
            .should('contain','#/login');
    });

    it('register validation', function () {
        cy.contains('Need an account?').click();

        cy.location('hash').should('contain', '#/register');

        cy.get('form').within(($form)=>{
            cy.get('input').first().type('Matthewksc');
            cy.get('input').eq(1).type(invalidUser.email);
            cy.get('input').eq(2).type(invalidUser.password)
            cy.root().submit();
        });

        cy.get('.error-messages')
            .should('contain', 'password is too short (minimum is 8 characters)')
            .and('be.visible')
            .and('contain', 'email is invalid')
            .and('contain','username has already been taken');

        cy.location('hash').should('contain', '#/register');
    });
})
