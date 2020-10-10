/*
PreRequest: In account should be at least one article
 */

describe('Change certain article', function (){

    before('Login', function (){
        cy.SingIn();
    });

    beforeEach('Aliases', function (){
        cy.get('ul.navbar-nav').children().as('bar');
    });

    it('change article', function () {
        cy.get('@bar')
            .contains('Matthewksc')
            .should('be.visible')
            .click();

        cy.get('.article-preview').first().as('article')

        cy.get('@article')
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

        cy.get('@bar')
            .contains('Matthewksc')
            .should('be.visible')
            .click();

        cy.get('@article')
            .should('contain', 'Changed');
    });

    after('Logout', function (){
        cy.SingOut();
    })
})
