import BasePage from './base';

export default class FormsPage extends BasePage {

  get firstName() { return cy.get('#firstName'); }
  get lastName() { return cy.get('#lastName'); }
  get userEmail() { return cy.get('#userEmail'); }
  get genderMale() { return cy.get('#gender-radio-1'); }
  get genderFemale() { return cy.get('#gender-radio-2'); }
  get genderOther() { return cy.get('#gender-radio-3'); }
  get userNumber() { return cy.get('#userNumber'); }
  get dateOfBirthInput() { return cy.get('#dateOfBirthInput'); }
  get subjectsInput() { return cy.get('#subjectsInput'); }
  get hobbiesSports() { return cy.get('#hobbies-checkbox-1'); }
  get hobbiesReading() { return cy.get('#hobbies-checkbox-2'); }
  get hobbiesMusic() { return cy.get('#hobbies-checkbox-3'); }
  get uploadPicture() { return cy.get('#uploadPicture'); }
  get currentAddress() { return cy.get('#currentAddress'); }
  get stateDropdown() { return cy.get('#state > .css-yk16xz-control > .css-1hwfws3'); }
  get cityDropdown() { return cy.get('#city > .css-yk16xz-control > .css-1hwfws3'); }
  get submitButton() { return cy.get('#submit'); }
  get modalTitle() { return cy.get('.modal-title'); }
  get stateAndCityDropdownOptions() { return cy.get('div[id^="react-select"][id*="-option-"]'); }


  fillFirstName(name) {
    this.firstName.type(name);
  }

  fillLastName(name) {
    this.lastName.type(name);
  }

  fillEmail(email) {
    this.userEmail.type(email);
  }

  selectGender(gender) {
    `input[value=${gender}]`.check({ force: true });
  }

  fillMobileNumber(number) {
    this.userNumber.type(number);
  }

  selectDateOfBirth(date) {
    this.dateOfBirthInput.type(date);
  }

  fillSubjects(subject) {
    this.subjectsInput.type(subject);
  }

  selectHobby(hobby) {
    cy.get(`#hobbies-checkbox-${hobby}`).check({ force: true });
  }

  uploadFile(filePath) {
    this.uploadPicture.attachFile(filePath);
  }

  fillCurrentAddress(address) {
    this.currentAddress.type(address);
  }

  selectState(stateName) {
    this.stateDropdown.click();
    this.stateAndCityDropdownOptions.contains(stateName).click();
  }

  selectCity(cityName) {
    this.cityDropdown.click();
    this.stateAndCityDropdownOptions.contains(cityName).click();
  }

  submitForm() {
    this.submitButton.click();
  }

  verifyFormNotSubmitted() {
    this.modalTitle.should('not.exist');
  }

  submittedFormValidation() {
    this.modalTitle.should('exist');
  }

  fillCompleteForm(formData) {
    this.firstName.type(formData.firstName);
    this.lastName.type(formData.lastName);
    this.userEmail.type(formData.email);
    this.genderMale.check({ force: true });
    this.userNumber.type(formData.mobileNumber);
    this.dateOfBirthInput.type(formData.dateOfBirth + '{enter}');
    this.subjectsInput.type(formData.subject + '{enter}');
    this.selectHobby(formData.hobby.numberId);
    this.currentAddress.type(formData.address);
    this.selectState(formData.state);
    this.selectCity(formData.city);
    this.submitButton.click();
  }


  get modalBody() {
    return cy.get('.modal-body');
  }

  get table() {
    return this.modalBody.find('.table');
  }

  get tableRows() {
    return this.table.find('tbody tr');
  }

  getTableCell(label) {
    return this.tableRows.contains(label).siblings('td');
  }

  assertTableCellValue(label, expectedValue) {
    this.getTableCell(label).should('have.text', expectedValue);
  }

}
