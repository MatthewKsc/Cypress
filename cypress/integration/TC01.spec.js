describe("Login and Logout testing", function (){
    it('Login', function () {
        cy.visit("/#/login?_k=ahhw5f");
        cy.title().should('eq', 'Conduit');
        cy.location('protocol').should('eq','https:')
        cy.get('form').within(($form)=>{
            cy.get('input[placeholder="Email"]').type("mkbills981@gmail.com");
            cy.get('input[placeholder="Password"]').type("ksciuk12");
            cy.root().submit();
        })
        cy.contains('Your Feed')
            .should('be.visible');
        cy.contains('Global Feed')
            .should('be.visible')
    });

    it('Logout', function () {
        cy.get('.navbar-nav')
            .children()
            .contains('Matthewksc').should('be.visible')
            .click();

        cy.location('hash').should('contain', '#/@Matthewksc');

        cy.get('.btn')
            .contains('Edit Profile Settings').should('be.visible')
            .click();

        cy.location('hash').should('contain', '#/settings');

        cy.get('.btn')
            .contains('Or click here to logout.').should('be.visible')
            .click();

        cy.get('.logo-font').should('be.visible');
    });
})
