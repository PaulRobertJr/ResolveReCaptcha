describe('Resolve Captcha', () => {
  beforeEach(() => {
    cy.visit('https://www.cpqd.com.br/teste-captcha/')
  })

  it('Pesquisa', () => {
    cy.get(
      '.wpcf7-form > :nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control'
    ).click()
  })
})
