# Cypress-Testing-Zero-Hero
Quick and easy Web UI Automation from scratch with Cypress 5 - a modern JavaScript-based framework

# Environment set up
- Install chrome browser
- install node.js
- install git
- install IDE (Visual studio code)

# Start project
```sh
git clone https://github.com/Postavshik/ngx-cypress-test
npm install
npm start
open http://localhost:4200
```

# Cypress installation
- npm install cypress --save-dev
- npx cypress open

# Documents
- Cypress configuration https://docs.cypress.io/guides/references/configuration.html#Options
- open cypress.json, edit and save
- add "baseUrl" : "http://localhost:4200" as our base url
- add "ignoreTestFiles": "**/examples/*" to ignore example files
- add "viewportHeight": 768, "viewportWidth": 1024 for browser screen resolution

# Hack
- beforeEach('code fore every test', () => {}) //repetitive test 
# type of locators
- example 

```sh
<input _ngcontent-bdd-c18="" data-cy="imputEmail1" fullwidth="" id="inputEmail1" nbinput="" placeholder="Email" type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">
```

- use tag e.g input
- to use id add hash symbol #inputEmail1
- to use class name add dot .input-full-width
- to use class value add [class="input-full-width size-medium shape-rectangle"]
- to use attribute add [placeholder]
- to use attribute name and value add [placeholder="Email"]
- to use two different attribute name and value add [input[placeholder="Email"][type="email"]]


```sh
//by tag name
cy.get('input')

//by ID
cy.get('#inputEmail1')

//by Class name
cy.get('.input-full-width')

 //by Class value
cy.get('[class="input-full-width size-medium shape-rectangle"]')

/by Attributes
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
```