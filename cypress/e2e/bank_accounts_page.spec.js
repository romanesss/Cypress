const {sign_in_page} = require("../selectors/sign_in_page");
const {sign_up_page} = require("../selectors/sign_up_page");
const {bank_accounts_page} = require("../selectors/bank_accounts_page");
const {data} = require("../user_data/data");

describe('UI tests for bank_account tests', () => {
    
    before('visiting sign in page', () => {
        cy.visit('/')
      })
      
//  -------------------------------
// create new spec file for bank_accounts tests, automate following tests:
// 1. creates a new bank account

    it('creates a new bank account for existing user', () => {
        cy.get(sign_in_page.username_field).type(data.username).should('have.value', data.username)
        cy.get(sign_in_page.password_field).type(data.password).should('have.value', data.password)
        cy.get(sign_in_page.enabled_sign_in_button).click()
        
        //remove comment for users without any bank account
        cy.get(bank_accounts_page.next_button).click()
    
    
        //add comment for users without any bank account
        //cy.get(bank_accounts_page.go_to_bank_accounts_page).should('be.visible').click()      
        //cy.get(bank_accounts_page.create_bank_account_button).should('be.visible').click()

        cy.get(bank_accounts_page.bank_name_field).type(data.bank_name).should('have.value', data.bank_name)
        cy.get(bank_accounts_page.routing_number_field).type(data.routing_number).should('have.value', data.routing_number)
        cy.get(bank_accounts_page.account_number_field).type(data.account_number).should('have.value', data.account_number)
        cy.get(bank_accounts_page.save_button).should('be.visible').click()
        
        //remove comment for users without any bank account
        cy.get(bank_accounts_page.done_button).should('be.visible').click()
        cy.get(bank_accounts_page.log_out_autorized).click()
        
    
    })

 

// 2. should display bank account form errors
    it('should display bank account form errors', () => {
        cy.get(sign_in_page.username_field).type(data.username).should('have.value', data.username)
        cy.get(sign_in_page.password_field).type(data.password).should('have.value', data.password)
        cy.get(sign_in_page.enabled_sign_in_button).click()

        cy.get(bank_accounts_page.go_to_bank_accounts_page).should('be.visible').click()
        cy.get(bank_accounts_page.create_bank_account_button).should('be.visible').click()

        cy.get(bank_accounts_page.bank_name_field).focus().blur()
        cy.get(bank_accounts_page.bank_name_helper_text).should('be.visible').and('have.text', 'Enter a bank name')
        cy.get(bank_accounts_page.bank_name_field).type('123')
        cy.get(bank_accounts_page.bank_name_helper_text).should('be.visible').and('have.text', 'Must contain at least 5 characters')

        cy.get(bank_accounts_page.routing_number_field).focus().blur()
        cy.get(bank_accounts_page.routing_number_helper_text).should('be.visible').and('have.text', 'Enter a valid bank routing number')
        cy.get(bank_accounts_page.routing_number_field).type('123')
        cy.get(bank_accounts_page.routing_number_helper_text).should('be.visible').and('have.text', 'Must contain a valid routing number')
        
        cy.get(bank_accounts_page.account_number_field).focus().blur()
        cy.get(bank_accounts_page.account_number_helper_text).should('be.visible').and('have.text', 'Enter a valid bank account number')
        cy.get(bank_accounts_page.account_number_field).type('123')
        cy.get(bank_accounts_page.account_number_helper_text).should('be.visible').and('have.text', 'Must contain at least 9 digits')
        
        //cy.get(bank_accounts_page.go_to_bank_accounts_page).should('be.visible').click()     
        cy.get(bank_accounts_page.log_out_autorized).click()
    })
// 3. user should be able to delete a bank account
    it('user should be able to delete a bank account', () => {
        cy.get(sign_in_page.username_field).type(data.username).should('have.value', data.username)
        cy.get(sign_in_page.password_field).type(data.password).should('have.value', data.password)
        cy.get(sign_in_page.enabled_sign_in_button).click()
        //cy.get(bank_accounts_page.delete_bank_account).should('be.visible').click()
        cy.get(bank_accounts_page.go_to_bank_accounts_page).should('be.visible').click()
        cy.contains('Delete').click()
        cy.contains('(Deleted)')
    })

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding
}) 