///<reference types="cypress-xpath"/>

describe('Resolve Captcha', () => {
  beforeEach(() => {
    cy.request('http://localhost:3000/recaptcha')
    cy.visit(
      'https://consulta.detran.ro.gov.br/CentralDeConsultasInternet/Internet/Veiculo/ConsultaVeiculo.asp'
    )
  })

  it('Pesquisa', () => {
    it('Pesquisa', () => {
      cy.wait(2500)
      cy.get('#Placa').type('NDY7055')
      cy.get('#Renavam').type('144974479')
      cy.ableTextArea()
      cy.wait(2500)
      cy.setRecaptcha()
      cy.get(':nth-child(4) > td > input').click()
    })
  })
})
