#challange-qa

This project contains automated tests for the demoqa.com website using Cypress. The tests cover key user flows in the Elements, Forms, Alerts, and Windows sections of the site.

## Prerequisites

- Node.js installed (version 14 or higher recommended)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/jose912893283/challange-qa.git
   ```
3. Install the dependencies:
   ```
   npm install
   ```
## Running Tests

To run the tests, you have two options:

1. Run all tests headlessly:
   ```
   npm run cypress:run:all
   ```
2. Open Cypress Test Runner and run tests interactively:
   ```
   npm run cypress:open
   ```
## Generating Test Report

This project uses Allure for generating detailed test reports. To generate and view the report:

1. Make sure you have executed the tests using one of the above commands.

2. Generate the Allure report:
   ```
   npm run allure:generate
   ```
The generated report will include:
- Test execution results
- Summary of pass/fail statuses
- Identified issues (if there is any)

## Project Structure

- `cypress/src/e2e/ui/`: Contains the test spec files organized by site sections
- `cypress/src/pages/`: Implements the Page Object Model for encapsulating selectors and actions
- `cypress/support/commands.js`: Defines custom Cypress commands for reusable functionality
- `cypress.config.js`: Configures Cypress settings and environment-specific configurations
- `config/*.json`: Contains environment-specific configuration files

## Continuous Integration

This project can be easily integrated with a CI/CD pipeline to run tests automatically on each code change. The `cypress:run:all` command can be used in the CI configuration to execute tests headlessly.

## Further Improvements

- Add screenshots or videos on test failure for better debugging
- Expand test coverage to include more scenarios and edge cases
- Integrate with a bug tracking system to automatically create issues 
