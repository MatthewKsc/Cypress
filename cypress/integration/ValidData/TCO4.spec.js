/*
PreRequest: In account should be at least one article
 */

describe('Change certain article', function (){

    before('Login', function (){
        cy.SingIn();
    });

    it('change article', function () {
        cy.get('ul.navbar-nav')
            .children()
            .contains('Matthewksc')
            .should('be.visible')
            .click();

        cy.get('.article-preview')
            .first()
            .should('be.visible')
            .click();

        cy.get('.btn-outline-secondary')
            .contains(' Edit Article')
            .should('be.visible')
            .click();

        cy.get('form').within(($form)=>{
            cy.get('input')
                .first()
                .clear()
                .type('Changed');

            cy.contains('Publish Article').click();
        });

        cy.hash().should('contain', '#/article');

        cy.get('ul.navbar-nav')
            .children()
            .contains('Matthewksc')
            .should('be.visible')
            .click();

        cy.get('.article-preview')
            .first()
            .should('contain', 'Changed');
    });

    after('Logout', function (){
        cy.SingOut();
    })
})
