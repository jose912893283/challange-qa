
import BasePage from './base';

export default class AlertsWindows extends BasePage {

  get tabButton() { return cy.get('#tabButton'); }
  get windowButton() { return cy.get('#windowButton'); }
  get messageWindowButton() { return cy.get('#messageWindowButton'); }
  get title() { return cy.contains('h1', 'Browser Windows') }
  get alertButton() { return cy.get('#alertButton'); }

}
