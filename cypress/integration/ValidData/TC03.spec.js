/*
PreRequest: In account should be at least one article
 */

describe('Delete article', function (){

    before('Login', function (){
        cy.SingIn();
    });

    it('delete article', function (){
        cy.get('ul.navbar-nav')
            .children()
            .contains('Matthewksc')
            .should('be.visible')
            .click();

        cy.get('.article-preview')
            .first()
            .should('be.visible')
            .click();

        cy.location('hash').should('contain','#/article');

        cy.get('.btn-outline-danger')
            .contains('Delete Article')
            .should('be.visible')
            .click();

        cy.contains('Your Feed')
            .should('be.visible');
    });

    after('Logout', function (){
        cy.SingOut();
    });
})
