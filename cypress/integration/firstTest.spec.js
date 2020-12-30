/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        //by tag name
        cy.get('')

        //by ID
        cy.get('#inputEmail1')

        //by Class
        cy.get('.input-full-width')
    })
})