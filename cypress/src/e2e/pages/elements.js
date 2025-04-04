
import BasePage from './base';

export default class ElementsPage extends BasePage {

  get menuList() { return cy.get('.menu-list') }

  get radioButtonSectionTitle() { return cy.get('h1').contains('Radio Button') }

  get question() { return cy.get('div.mb-3') }

  get yesRadio() { return cy.get('#yesRadio') }

  get impressiveRadio() { return cy.get('#impressiveRadio') }

  get noRadio() { return cy.get('#noRadio') }

  get selectedText() { return cy.get('p.mt-3 span.text-success') }

  get checkboxResult() { return cy.get('#result') }

  get desktopCheckbox() { return cy.get('#tree-node-desktop') }

  get displayAllCheckboxesbutton() { return cy.get('button[title="Toggle"]') }

  get documentsCheckbox() { return cy.get('#tree-node-documents') }

  selectYesRadio() {
    this.yesRadio.check({ force: true });
  }

  selectImpressiveRadio() {
    this.impressiveRadio.check({ force: true });
  }

  selectNoRadio() {
    this.noRadio.check({ force: true });
  }

  assertSelectedText(expectedText) {
    this.selectedText.should('have.text', expectedText);
  }
}
