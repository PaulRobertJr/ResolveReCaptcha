///<reference types="cypress-xpath"/>

describe('Resolve Captcha', () => {
  beforeEach(() => {
    cy.visit(
      'https://consulta.detran.ro.gov.br/CentralDeConsultasInternet/Internet/Veiculo/ConsultaVeiculo.asp'
    )
  })

  it('Pesquisa', () => {
    cy.get('#Placa').type('NDY7055')
    cy.get('#Renavam').type('144974479')
    cy.clickRecaptcha()
    cy.wait(500)
    cy.setRecaptcha()
    // cy.get(':nth-child(4) > td > input').click()
  })
})
