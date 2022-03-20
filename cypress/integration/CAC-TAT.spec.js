// essa reference é para buscar os tipos de cypress, ter acesso aos autocompletes, etc
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  it('verifica o título da aplicação', function() {
    cy.visit('../../src/index.html')
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
      // .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})