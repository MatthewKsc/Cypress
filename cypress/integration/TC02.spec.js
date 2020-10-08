describe('Create a article', function (){

    before('Login', function (){
       cy.SingIn();
    });

    it('create', function () {
        cy.get('ul.navbar-nav')
            .children()
            .contains('New Post')
            .click();

        cy.hash().should('contain', '#/editor');

        cy.get('form').within(($form)=>{
            cy.get('input').first().type('Test');
            cy.get('input').eq(1).type('Test');
            cy.get('textarea').last().type('Test');
            cy.contains('Publish Article').click()
        });

        cy.hash().should('contain', '#/article');
    });

    it('check if created', function () {
        cy.get('ul.navbar-nav')
            .children()
            .contains('Matthewksc')
            .click();

        cy.get('.article-preview')
            .first()
            .should('contain', 'Test')
            .should('be.visible');
    });

    it('like and unlike article', function () {
        cy.get('.ion-heart')
            .first()
            .should('be.visible')
            .click();

        cy.get('ul.nav-pills')
            .children()
            .contains('Favorited Articles')
            .should('be.visible')
            .click();

        cy.get('.ion-heart')
            .first()
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
