
export default class BasePage {

  get menuList() { return cy.get('.menu-list') }

  get radioButtonSidebarOption() { return cy.get('li').contains('Radio Button') }

  get checkboxSidebarOption() { return cy.get('li').contains('Check Box') }

}   
