import FormsPage from '../pages/forms.js';

const forms = new FormsPage();
const baseUrl = Cypress.env('baseUrl');

describe('Practice Form Tests', () => {
  const formData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    mobileNumber: '1234567890',
    dateOfBirth: '03 Apr 2025',
    subject: 'Maths',
    hobby: {
      numberId: 1,
      name: 'Sports',
    },
    filePath: 'path/to/file.jpg',
    address: '123 Main St',
    state: 'NCR',
    city: 'Delhi'

  };

  beforeEach(() => {
    cy.visit(baseUrl + '/automation-practice-form');
  });

  it('should fill the form and submit successfully', () => {
    forms.fillCompleteForm(formData);

    cy.log('Asserting modal submitted title and some data');
    forms.submittedFormValidation();
    cy.log('Asserting Student Name');
    forms.assertTableCellValue('Student Name', `${formData.firstName} ${formData.lastName}`);

    cy.log('Asserting Student Email');
    forms.assertTableCellValue('Student Email', formData.email);

    cy.log('Asserting Gender');
    forms.assertTableCellValue('Gender', formData.gender);

    cy.log('Asserting Mobile Number');
    forms.assertTableCellValue('Mobile', formData.mobileNumber);

    cy.log('Asserting Subjects');
    forms.assertTableCellValue('Subjects', formData.subject);

    cy.log('Asserting Hobbies');
    forms.assertTableCellValue('Hobbies', formData.hobby.name);

    cy.log('Asserting Address');
    forms.assertTableCellValue('Address', formData.address);

    cy.log('Asserting State and City');
    forms.assertTableCellValue('State and City', `${formData.state} ${formData.city}`);
  });

  it('should validate required fields', () => {
    forms.submitForm();
    cy.log('Asserting modal title');
    forms.verifyFormNotSubmitted();

  });

  it('should validate email format', () => {
    forms.fillFirstName(formData.firstName);
    forms.fillLastName(formData.lastName);
    forms.fillEmail('invalid-email');
    forms.submitForm();
    forms.verifyFormNotSubmitted();

  });

  it('should check gender selection', () => {
    forms.fillFirstName(formData.firstName);
    forms.fillLastName(formData.lastName);
    forms.fillEmail(formData.email);
    forms.fillMobileNumber(formData.mobileNumber);
    forms.submitForm();
    forms.verifyFormNotSubmitted();
  });

  it('should check hobbies selection', () => {
    forms.fillFirstName(formData.firstName);
    forms.fillLastName(formData.lastName);
    forms.fillEmail(formData.email);
    forms.fillMobileNumber(formData.mobileNumber);
    forms.selectHobby(2);
    forms.submitForm();
    forms.verifyFormNotSubmitted();
  });


});