# QA Automation Challenge – Summary Report

## Approach
The project was structured using Cypress to perform end-to-end UI testing of key user flows on the demoqa.com site. The tests cover functionality in the Elements, Forms, Alerts, and Windows sections.

## Tool/Framework Selection 
Cypress was the tool/framework for this challenge because of its speed, automatic waiting capabilities, and active community. Cypress makes it easy to write readable tests and provides helpful commands out of the box,  

## Key Decisions
- Used a Page Object Model to encapsulate selectors and actions for each page
- Separated the tests into spec files based on the sections of the site (`elements.cy.js`, `forms.cy.js`, `browserWindows.cy.js`)  
- Configured a base URL and environment-specific config using `cypress.config.js` and `config/*.json` files
- Integrated the Allure reporter for enhanced test reporting

## Challenges & Insights
One challenge was handling assertions cause the sofware under test y flaky takes some time to load the page, but i resolved this extending the timeout for assertions and pageLoad, also adding retries inside the configuration

 
