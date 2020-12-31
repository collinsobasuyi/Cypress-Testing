/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by tag name
        cy.get('input')

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
        cy.get('[data-cy="imputEmail1"]')

    })

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // find element with cy locator 
        cy.get('[data-cy="signInButton"]')

        // Find element with text name
        cy.contains('Sign in')

        // find element with attribute name and value and text name
        cy.contains('[status="warning"]', 'Sign in')

        //find element from parents
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()




    })
})