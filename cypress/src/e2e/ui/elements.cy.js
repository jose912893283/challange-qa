import ElementsPage from '../pages/elements.js';

const elements = new ElementsPage();
const baseUrl = Cypress.env('baseUrl');

context('Elements tests', () => {

  describe('Radio button tests', () => {
    beforeEach(() => {
      cy.visit(baseUrl + '/elements');
      elements.menuList.should('be.visible');
      elements.radioButtonSidebarOption.click();

    });

    it('Radio button yes', () => {
      elements.selectYesRadio();
      elements.assertSelectedText('Yes');
    });

    it('Radio button impressive', () => {
      elements.selectImpressiveRadio();
      elements.assertSelectedText('Impressive');
    });

    it('Validate can only select one radio button at the same time', () => {
      elements.selectImpressiveRadio();
      elements.yesRadio.should('not.be.checked');
    });
  });

  describe('checkbox tests', () => {

    beforeEach(() => {
      cy.visit(baseUrl + '/elements');
      elements.menuList.should('be.visible');
      elements.checkboxSidebarOption.click();
      elements.displayAllCheckboxesbutton.click();
    });

    it('checkbox test with only one checkbox (desktop)', () => {
      elements.desktopCheckbox.check({ force: true });
      elements.checkboxResult.should('contain.text', 'desktop');
    });

    it('checkbox test with multiple checkboxes (desktop and documents)', () => {
      elements.desktopCheckbox.check({ force: true });
      elements.checkboxResult.should('contain.text', 'desktop');
      elements.documentsCheckbox.check({ force: true });
      elements.checkboxResult.should('contain.text', 'documents');

    });
  });
});