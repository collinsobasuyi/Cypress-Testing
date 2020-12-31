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
- Example code snippet
```sh
<input _ngcontent-bdd-c18="" 
data-cy="imputEmail1" 
fullwidth="" 
id="inputEmail1" 
nbinput="" 
placeholder="Email" 
type="email" 
ng-reflect-full-width="" 
class="input-full-width size-medium shape-rectangle">
</input>
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

# Finding web elements

- Example code snippet
```sh

<form _ngcontent-kda-c18="" 
class="form-horizontal">
<div _ngcontent-kda-c18="" class="form-group row">
<label _ngcontent-kda-c18="" class="label col-sm-3 form-control-label" for="inputEmail3">Email</label>
<div _ngcontent-kda-c18="" class="col-sm-9">

<input _ngcontent-kda-c18="" fullwidth="" id="inputEmail3" nbinput="" placeholder="Email" type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle"></div></div>

<div _ngcontent-kda-c18="" class="form-group row">

<label _ngcontent-kda-c18="" class="label col-sm-3 form-control-label" for="inputPassword3">Password</label>

<div _ngcontent-kda-c18="" class="col-sm-9"><input _ngcontent-kda-c18="" fullwidth="" id="inputPassword3" nbinput="" placeholder="Password" type="password" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle"></div></div><div _ngcontent-kda-c18="" class="form-group row">

<div _ngcontent-kda-c18="" class="offset-sm-3 col-sm-9">

<div _ngcontent-kda-c18="" class="checkbox"><nb-checkbox _ngcontent-kda-c18="" _nghost-kda-c20=""><label _ngcontent-kda-c20="" class="label"><input _ngcontent-kda-c20="" class="native-input visually-hidden" type="checkbox">

<span _ngcontent-kda-c20="" class="custom-checkbox"><!--bindings={
  "ng-reflect-ng-if": "false"
}--><!--bindings={
  "ng-reflect-ng-if": "false"
}--></span>

<span _ngcontent-kda-c20="" class="text">Remember me</span></label></nb-checkbox></div></div></div><div _ngcontent-kda-c18="" class="form-group row">

<div _ngcontent-kda-c18="" class="offset-sm-3 col-sm-9">

<button _ngcontent-kda-c18="" nbbutton="" status="warning" type="submit" _nghost-kda-c16="" ng-reflect-status="warning" class="appearance-filled size-medium status-warning shape-rectangle transitions" aria-disabled="false" tabindex="0"> `Sign in` </button>

</div></div>
</form>


```

```sh        
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


```
 
