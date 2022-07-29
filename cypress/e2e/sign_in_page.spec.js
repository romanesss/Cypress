const {sign_in_page} = require("../selectors/sign_in_page");

describe('UI tests for sign in page', () => {

  before('visiting sign in page', () => {
    cy.visit('/')
  })

  it('should show "Real World App logo"', () => {
    cy.get(sign_in_page.logo_image).should('be.visible').and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
  })

  it('should show "Sign in" title', () => {
    cy.get(sign_in_page.title_text).should('be.visible').and('have.text', 'Sign in')
  })

  // Homework 14.07: - Done
  // 1. should show typeable Username field
  it("should show typeable Username field", function() {
    cy.get(sign_in_page.username_field).should('be.visible').and('be.not.disabled')
  })
  // 2. should show typeable Password field
  it("should show typeable Password field", function() {
    cy.get(sign_in_page.password_field).should('be.visible').and('be.not.disabled')
  })
  // 3. should show Username and Password placeholders
  it("should show typeable show Username and Password placeholders", function() {
    cy.get(sign_in_page.username_placeholder_field).should('be.visible').and('have.text', 'Username')
    cy.get(sign_in_page.password_placeholder_field).should('be.visible').and('have.text', 'Password')
  })
  // 4. should show 'Username is required' error if user clicks on it and then click outside this field and didn't enter any value
  it("should show  'Username is required' error if user clicks on it and then click outside this field and didn't enter any value", function() {
    cy.get(sign_in_page.password_field).click()
    cy.get(sign_in_page.username_helper_text).should('be.visible').and('have.text', 'Username is required')
  })
  // 5. check "Remember me" checkbox
  it("should click check 'Remember me' checkbox",function() {
    cy.get(sign_in_page.checkbox).click()
  })
  // 6. should show disabled by default sign in btn
  it("should show disabled by default sign in btn", function() {
    cy.get(sign_in_page.disabled_sign_in_button).should('be.visible').and('be.disabled')
  })
  // 7. should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn\
  it("should should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn", function() {
    cy.get(sign_in_page.dont_have_an_account_link).should('be.visible').and('be.not.disabled')
  })
  
  // 8. should show Cypress copyright link that leads to 'https://www.cypress.io/'
  it("should should have should show Cypress copyright link that leads to 'https://www.cypress.io/'", function() {
    cy.get(sign_in_page.link_to_cypress).should('be.visible').and('have.attr', 'href', 'https://cypress.io')
  })
})

  // Homework 19.07:
// 1. should allow a visitor to sign-up
// 2. should allow a visitor to login
// 3. should allow a visitor to logout
// -----------------------------------

// Homework 21.07
// 4. should display login errors
// 5. should display signup errors
// 6. should error for an invalid user
// 7. should error for an invalid password for existing user
//  -------------------------------
// create new spec file for bank_accounts tests, automate following tests:
// 1. creates a new bank account
// 2. should display bank account form errors
// 3. user should be able to delete a bank account

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding

// homework 26.7 // use already existing users from database-seed.json file from app project; password - s3cret
// 1. navigates to the new transaction form, selects a user and submits a transaction payment
// 2. navigates to the new transaction form, selects a user and submits a transaction request"
// 3. displays new transaction errors
// 4. submits a transaction payment and verifies the deposit for the receiver
// 5. submits a transaction request and accepts the request for the receiver
// 6. searches for a user by attribute
