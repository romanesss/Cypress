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
        cy.ui_login(data.username, data.password)        
        cy.ui_onboarding(data.bank_name, data.routing_number, data.account_number)
        cy.ui_logout()
        
    
    })

// 2. should display bank account form errors
    it('should display bank account form errors', () => {
        cy.ui_login(data.username, data.password)

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
        
        cy.ui_logout()
    })

// 3. user should be able to delete a bank account
    it('user should be able to delete a bank account', () => {
        cy.ui_login(data.username, data.password)

        cy.get(bank_accounts_page.go_to_bank_accounts_page).should('be.visible').click()
        cy.contains('Delete').click()
        cy.contains('(Deleted)')
    })
}) 