const {sign_in_page} = require("../selectors/sign_in_page");
const {sign_up_page} = require("../selectors/sign_up_page");
const {transaction_page} = require("../selectors/transaction_page");
const {data} = require("../user_data/data");

describe('UI tests for new_transaction page', () => {
    before('visiting sign in page', () => {
        cy.visit('/')
        cy.ui_login(data.username, data.password)  
      })
      

    //// homework 26.7:
    //create new_transaction.spec.js and automate following tests:
    // 1. navigates to the new transaction form, selects a user and submits a transaction payment  
    it('creating new transaction form payment', function() {
        cy.get(transaction_page.new_transaction_button).click()           
        cy.get(transaction_page.user1_button).should('be.visible').click({force: true})
        //+ checking placeholders
        cy.get(transaction_page.amount_field).should('be.visible').and('have.attr', 'placeholder', 'Amount' ).type(data.amount)
        cy.get(transaction_page.add_note_field).should('be.visible').and('have.attr', 'placeholder', 'Add a note').type(data.note)
        cy.get(transaction_page.pay_button).should('be.visible').click()
        cy.get(transaction_page.succesfull_message).should('be.visible')
    })

    // 2. navigates to the new transaction form, selects a user and submits a transaction request"
    it('creating new transaction form request', function() {
        cy.get(transaction_page.create_another_trans).should('be.visible').click()
        cy.get(transaction_page.user1_button).should('be.visible').click({force: true})
        cy.get(transaction_page.amount_field).should('be.visible').type(data.amount)
        cy.get(transaction_page.add_note_field).should('be.visible').type(data.note)
        cy.get(transaction_page.request_button).should('be.visible').click()
        cy.get(transaction_page.succesfull_message).should('be.visible')
    })

    // 3. displays new transaction errors
    it('creating new transaction form request', function() {
        cy.get(transaction_page.create_another_trans).should('be.visible').click()
        cy.get(transaction_page.user1_button).should('be.visible').click({force: true})
        cy.get(transaction_page.amount_field).focus().blur()
        cy.get(transaction_page.amount_helper_text).should('be.visible').and('have.text', 'Please enter a valid amount')
        cy.get(transaction_page.add_note_field).focus().blur()
        cy.get(transaction_page.add_a_note_helper_text).should('be.visible').and('have.text', 'Please enter a note')

        cy.get(transaction_page.pay_button).should('be.visible').and('be.disabled')
        cy.get(transaction_page.request_button).should('be.visible').and('be.disabled')
    })

    // 4. submits a transaction payment and verifies the deposit for the receiver
    /////don`t understand the task////

    // 5. submits a transaction request and accepts the request for the receiver

    it(' submits a transaction request and accepts the request for the receiver', function() {
        cy.ui_login(data.user_a_username, data.user_a_password) 

        cy.get(transaction_page.new_transaction_button).click()
        cy.get(transaction_page.search_field).type(data.user_b_username,{force: true})
        cy.wait(500)     

        cy.get(transaction_page.first_person).first().should('be.visible').click({force: true})
        cy.get(transaction_page.amount_field).should('be.visible').type(data.a_amount)
        cy.get(transaction_page.add_note_field).should('be.visible').type(data.note)
        cy.get(transaction_page.request_button).should('be.visible').click()
        cy.get(transaction_page.logout_button).click()
        
       
        cy.ui_login(data.user_b_username, data.user_b_password)
        cy.get(transaction_page.home_button).click()
        cy.get(transaction_page.mine_trans).click()
        cy.get(transaction_page.first_personal_item).first().click({force: true})
        cy.get(transaction_page.first_req_summ_notify).contains(data.a_amount)
        cy.xpath(transaction_page.accept_request_button).should('be.visible').and('not.be.disabled').click()
    })

    // 6. searches for a user by attribute
    ////don`t understand the task////
})
