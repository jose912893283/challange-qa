import AlertsWindowsPage from '../pages/alertsWindows.js';

const alertsWindows = new AlertsWindowsPage();
const demoqaUrlSample = 'https://demoqa.com/sample';
const alertText = 'You clicked a button';
const baseUrl = Cypress.env('baseUrl');

context('Browser Windows and alerts tests', () => {

  describe('Browser Windows tests', () => {
    beforeEach(() => {
      cy.visit(baseUrl + '/browser-windows');
      alertsWindows.title.should('be.visible');
    });

    it('should open new tab', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = demoqaUrlSample;
        }).as("popup")
      })
      alertsWindows.tabButton.click();
      cy.get('@popup').should("be.called");

    });

    it('should open new window', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = demoqaUrlSample;
        }).as("popup")
      })
      alertsWindows.windowButton.click();
      cy.get('@popup').should("be.called");

    });

    it('should open new window message', () => {
      const expectedText = 'Knowledge increases by sharing but not by saving';
      cy.log('Asserting part of the text expected');
      cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url, target, features) => {
          const fakeWindow = {
            document: {
              write: (content) => {
                expect(content).to.contain(expectedText);
              }
            }
          };
          return fakeWindow;
        });
      });

      alertsWindows.messageWindowButton.click();


    });
  });

  describe('Alert tests', () => {
    it('should show alert on click', () => {
      cy.visit(baseUrl + '/alerts');
      cy.on('window:alert', (text) => {
        expect(text).to.equal(alertText);
      });
      alertsWindows.alertButton.click();
    });
  });
});