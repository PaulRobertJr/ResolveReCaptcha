///<reference types="cypress-xpath"/>

describe('Resolve Captcha', () => {
  beforeEach(() => {
    cy.visit(
      'https://consulta.detran.ro.gov.br/CentralDeConsultasInternet/Internet/Veiculo/ConsultaVeiculo.asp'
    )
  })

  it('Pesquisa', () => {
    cy.wait(2500)
    cy.get('#Placa').type('MOCKED')
    cy.get('#Renavam').type('MOCKED')
    cy.ableTextArea()
    cy.wait(2500)
    cy.setRecaptcha()
    cy.get(':nth-child(4) > td > input').click()
  })
})
