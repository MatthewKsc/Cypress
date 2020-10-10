describe('Article form validation', function (){

    before('Login', function (){
        cy.SingIn();
    })

    it('article validation', function () {

        cy.get('ul.navbar-nav')
            .children()
            .contains('New Post')
            .click();

        cy.hash().should('contain', '#/editor');

        cy.get('.btn-lg')
            .contains('Publish Article')
            .click()
            .click();// after one click submit button is not invoke proper post

        cy.get('.error-messages')
            .should('be.visible')
            .and('contain',"title can't be blankis too short (minimum is 1 character)")
            .and('contain', "body can't be blank" )
            .and('contain', "description can\'t be blankis too short (minimum is 1 character)");
    });
})
