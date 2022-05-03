Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
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

Cypress.Commands.add('setRecaptcha', () => {
  cy.request('GET', 'http://localhost:3000/recaptcha', { timeout: 50000 }).then(
    data => {
      const token = data.body
      console.log(token)
      cy.window().then(win => {
        win.document.querySelector('#g-recaptcha-response').innerHTML = token
      })
    }
  )
})
