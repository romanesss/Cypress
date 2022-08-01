const {sign_in_page} = require("../selectors/sign_in_page");
const {sign_up_page} = require("../selectors/sign_up_page");
const {bank_accounts_page} = require("../selectors/bank_accounts_page");
const {data} = require("../user_data/data");

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding

Cypress.Commands.add('ui_login', (username, password) => {
    cy.get(sign_in_page.username_field).type(username)
    cy.get(sign_in_page.password_field).type(password)
    cy.get(sign_in_page.enabled_sign_in_button).click()
})

Cypress.Commands.add('ui_onboarding', (bank_name, routing_number, account_number) => {
    cy.get(bank_accounts_page.next_button).click()
    cy.get(bank_accounts_page.bank_name_field).type(bank_name)
    cy.get(bank_accounts_page.routing_number_field).type(routing_number)
    cy.get(bank_accounts_page.account_number_field).type(account_number)
    cy.get(bank_accounts_page.save_button).click()
    cy.get(bank_accounts_page.done_button).click()
})

Cypress.Commands.add('ui_logout', () => {
    cy.get(bank_accounts_page.log_out_autorized).click()
})

Cypress.Commands.add('ui_sign_up', (name, last_name, username, password) => {
    cy.visit('http://localhost:3000/signup')
    cy.get(sign_up_page.first_Name_field).type(name)
    cy.get(sign_up_page.last_Name_field).type(last_name)
    cy.get(sign_up_page.username_sign_up_field).type(username)
    cy.get(sign_up_page.password_sign_up_field).type(password)
    cy.get(sign_up_page.confirm_password_field).type(password)
    cy.get(sign_up_page.sign_up_button).click()
})
