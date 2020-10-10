describe('Create a article', function (){

    const test = 'Test';

    before('Login', function (){
       cy.SingIn();
    });

    beforeEach('Aliases', function (){
        cy.get('ul.navbar-nav').children().as('bar');
    });

    it('create', function () {
        cy.get('@bar')
            .contains('New Post')
            .click();

        cy.hash().should('contain', '#/editor');

        cy.get('form').within(($form)=>{
            cy.get('input').first().type(test);
            cy.get('input').eq(1).type(test);
            cy.get('textarea').last().type(test);
            cy.contains('Publish Article').click()
        });

        cy.hash().should('contain', '#/article');
    });

    it('check if created', function () {
        cy.get('@bar')
            .contains('Matthewksc')
            .click();

        cy.get('.article-preview')
            .first()
            .should('contain', test)
            .should('be.visible');
    });

    it('like and unlike article', function () {
        cy.get('.ion-heart').first().as('heart');

        cy.get('@heart')
            .should('be.visible')
            .click();

        cy.get('ul.nav-pills')
            .children()
            .contains('Favorited Articles')
            .should('be.visible')
            .click();

        cy.get('@heart')
            .should('be.visible')
            .click();

    /*
        cy.reload(); //can't be apply bcs this method cause logout
        cy.get('.article-preview')
            .should('contain', 'No articles are here... yet.')
     */

    });

    after('Logout', function (){
        cy.SingOut()
    })
})
