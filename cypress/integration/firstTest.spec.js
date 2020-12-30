/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        //by tag name
        cy.get('')

        //by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by Attributes
        cy.get('[placeholder]')

        //by Attributes name and value
        cy.get('[placeholder="Email"]')

        //by tag nam and attributes with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('input[placeholder="Email"][type="email"]')

        //by tag name, attributes with value, ID and class name 
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        
        //most recommended way by cypress
        cy.get('[data-cy="inputEmail]')

    })
})