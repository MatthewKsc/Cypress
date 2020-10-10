/*
PreRequest: In account should be at least one article
 */

describe('Delete article', function (){

    before('Login', function (){
        cy.SingIn();
    });

    beforeEach('Aliases', function (){
        cy.get('ul.navbar-nav').children().as('bar');
    });

    it('delete article', function (){
        cy.get('@bar')
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
