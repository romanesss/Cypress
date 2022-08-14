const {sign_in_page} = require("../selectors/sign_in_page");
const {sign_up_page} = require("../selectors/sign_up_page");
const {data} = require("../user_data/data");

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
    cy.get(sign_in_page.checkbox).click().should('be.checked')
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

// Homework 19.07:
// 1. should allow a visitor to sign-up
  it("should allow a visitor to sign-up", function() {
    cy.get(sign_in_page.dont_have_an_account_link).click()
    cy.url().should('eq','http://localhost:3000/signup')
    cy.get(sign_up_page.first_Name_field).type(data.name).should('have.value', data.name)
    cy.get(sign_up_page.last_Name_field).type(data.last_Name).should('have.value', data.last_Name)
    cy.get(sign_up_page.username_sign_up_field).type(data.username).should('have.value', data.username)
    cy.get(sign_up_page.password_sign_up_field).type(data.password).should('have.value', data.password)
    cy.get(sign_up_page.confirm_password_field).type(data.password).should('have.value', data.password)
    cy.get(sign_up_page.sign_up_button).should('be.visible').and('have.text', 'Sign Up').click()

  }) 
// 2. should allow a visitor to login
  it("should allow a visitor to login", function() {
    cy.url().should('eq','http://localhost:3000/signin')
    cy.get(sign_in_page.username_field).type(data.username).should('have.value', data.username)
    cy.get(sign_in_page.password_field).type(data.password).should('have.value', data.password)
    cy.get(sign_in_page.enabled_sign_in_button).should('be.visible').and('have.text', 'Sign In').click()
    cy.url().should('eq', 'http://localhost:3000/')
  }) 

// 3. should allow a visitor to logout
  it("should allow a visitor to logout", function() {
    cy.get(sign_in_page. logout_aft_sign_up_button).should('be.visible').click()
    cy.url().should('eq','http://localhost:3000/signin')
  }) 

// -----------------------------------
// Homework 21.07
// 4. should display login errors
  it("should display login errors", function() {
    cy.get(sign_in_page.username_field).blur()
    cy.get(sign_in_page.username_helper_text).should('have.text', 'Username is required')
    cy.get(sign_in_page.password_field).type('one').blur()
    cy.get(sign_in_page.password_helper_text).should('be.visible').and('have.text', 'Password must contain at least 4 characters')  
  }) 
// 5. should display signup errors
  it("should display signup errors", function() {
    cy.get(sign_in_page.dont_have_an_account_link).click()
    
    cy.get(sign_up_page.first_Name_field).blur()
    cy.get(sign_up_page.first_name_helper_text).should('be.visible').and('have.text', 'First Name is required')
    
    cy.get(sign_up_page.last_Name_field).focus().blur()
    cy.get(sign_up_page.last_name_helper_text).should('be.visible').and('have.text', 'Last Name is required')

    cy.get(sign_up_page.username_sign_up_field).focus().blur()
    cy.get(sign_up_page.user_name_helper_text).should('be.visible').and('have.text', 'Username is required')

    cy.get(sign_up_page.password_sign_up_field).focus().blur()
    cy.get(sign_up_page.password_helper_text).should('be.visible').and('have.text', 'Enter your password')

    cy.get(sign_up_page.confirm_password_field).focus().blur()
    cy.get(sign_up_page.confirm_password_helper_text).should('be.visible').and('have.text', 'Confirm your password')

    cy.get(sign_up_page.password_sign_up_field).type('one')
    cy.get(sign_up_page.password_helper_text).should('be.visible').and('have.text', 'Password must contain at least 4 characters')

    cy.get(sign_up_page.confirm_password_field).type('two')
    cy.get(sign_up_page.confirm_password_helper_text).should('be.visible').and('have.text', 'Password does not match')

  }) 

// 6. should error for an invalid user
  it("should error for an invalid user", function() {
    cy.get(sign_up_page.sign_in_button).click().url('eq', 'http://localhost:3000/signin')

    cy.get(sign_in_page.username_field).type('random_username').should('have.value', 'random_username')
    cy.get(sign_in_page.password_field).type(data.password).should('have.value', data.password)
    cy.get(sign_in_page.enabled_sign_in_button).click()

    cy.get(sign_in_page.sign_in_invalid_message).should('be.visible').and('have.text', 'Username or password is invalid').url('eq', 'http://localhost:3000/signin')

  }) 

  // 7. should error for an invalid password for existing user
  it("should error for an invalid password for existing user", function() {
    
    cy.get(sign_in_page.username_field).type(data.username).should('have.value', data.username)
    cy.get(sign_in_page.password_field).type('random_password').should('have.value', 'random_password')
    cy.get(sign_in_page.enabled_sign_in_button).click()

    cy.get(sign_in_page.sign_in_invalid_message).should('be.visible').and('have.text', 'Username or password is invalid')
    
  }) 

  //----------------------------------------------------------------------------------------------------------------------------//
  //creates users a and b
  it('creating user a and b', function() {
    cy.ui_sign_up(data.user_a_name, data.user_a_last_Name, data.user_a_username, data.user_a_password)
    cy.ui_login(data.user_a_username, data.user_a_password)        
    cy.ui_onboarding(data.bank_name, data.routing_number, data.account_number)
    cy.ui_logout()

    cy.ui_sign_up(data.user_b_name, data.user_b_last_Name, data.user_b_username, data.user_b_password)
    cy.ui_login(data.user_b_username, data.user_b_password)        
    cy.ui_onboarding(data.bank_name, data.routing_number, data.account_number)
    cy.ui_logout()

  })

})