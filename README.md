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
### npm install cypress --save-dev
### npx cypress open

# Documents
### Cypress configuration https://docs.cypress.io/guides/references/configuration.html#Options

## open cypress.json, edit and save
### add "baseUrl" : "http://localhost:4200" as our base url
### add "ignoreTestFiles": "**/examples/*" to ignore example files
### add "viewportHeight": 768, "viewportWidth": 1024 for browser screen resolution

# Hack
### beforeEach('code fore every test', () => {}) //repetitive test 

# type of locators
## example <input _ngcontent-bdd-c18="" data-cy="imputEmail1" fullwidth="" id="inputEmail1" nbinput="" placeholder="Email" type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">
### to use id add hash symbol
### to use class add dot . 
### to use attribute add []