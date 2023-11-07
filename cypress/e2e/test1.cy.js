/// <reference types="cypress"/>
describe ('first', ()=> {
    beforeEach (() => {
        cy.visit('http://demoqa.com/')
    })
it('verify link', () => {
    cy.get('div.category-cards .card-body h5').contains('Elements').click()
        cy.get('#item-0 span').contains('Text Box').click()
        cy.get('#userName').type('Olia')
})
it('Check the redirection from home page', () => {
    cy.visit('http://demoqa.com/')
    cy.get('.home-banner').invoke('removeAttr', 'target').click()
   


});
})