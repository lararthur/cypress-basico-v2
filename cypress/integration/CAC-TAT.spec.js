// essa reference é para buscar os tipos de cypress, ter acesso aos autocompletes, etc
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(() => {
    cy.visit('../../src/index.html')
  })
  it('verifica o título da aplicação', function() {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', function() {
    cy.get('#firstName').type('Garibaldo')
    cy.get('#lastName').type('de Paula')
    cy.get('#email').type('gpaula@gmail.com')
    cy.get('#open-text-area').type('Testando...')
    cy.get('button[type=submit]').click()
    cy.get('.success').should('be.visible')
  })
})