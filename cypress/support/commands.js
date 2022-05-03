// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
  // Wait until the iframe (Google reCAPTCHA) is totally loaded
  cy.wait(500)
  cy.get('#g-recaptcha *> iframe').then($iframe => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body)
      .find('.recaptcha-checkbox-border')
      .should('be.visible')
      .click()
  })
})

Cypress.Commands.add('clickRecaptcha', () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById('recaptcha-token')
      .click()
  })
})

Cypress.Commands.add('ableTextArea', () => {
  cy.window().then(win => {
    win.document.querySelector('#g-recaptcha-response').style.display = ''
  })
})
//test

Cypress.Commands.add('getToken', token => {
  cy.request({
    method: 'GET',
    url: 'https://localhost:3000/recaptcha'
  })
    .its('token')
    .should('not.be.empty')
})

import 'cypress-localstorage-commands'

Cypress.Commands.add('setRecaptcha', () => {
  cy.request('GET', 'http://localhost:3000/recaptcha', { timeout: 50000 }).then(
    data => {
      const token = data.body
      cy.window().then(win => {
        win.document.querySelector('#g-recaptcha-response').innerHTML = token
      })
    }
  )
})
