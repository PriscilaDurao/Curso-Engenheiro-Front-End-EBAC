/// <reference types="cypress" />

describe('Testes das funcionalidades da Agenda de Contatos', () => {
  const baseUrl = 'https://ebac-agenda-contatos-tan.vercel.app/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Deve incluir um novo contato na lista', () => {
    cy.get('input[type="text"]').type('Contato Teste Cypress')
    cy.get('input[type="email"]').type('cypress.teste@ebac.com')
    cy.get('input[type="tel"]').type('11988887777')
    cy.get('.adicionar').click()

    cy.contains('Contato Teste Cypress').should('be.visible')
    cy.contains('cypress.teste@ebac.com').should('be.visible')
    cy.contains('11988887777').should('be.visible')
  })

  it('Deve alterar um contato existente', () => {
    cy.get('.contato').last().find('.edit').click()

    cy.get('input[type="text"]').clear().type('Contato Alterado Cypress')
    cy.get('input[type="email"]').clear().type('alterado.cypress@ebac.com')
    cy.get('input[type="tel"]').clear().type('11999990000')

    cy.get('.alterar').click()

    cy.contains('Contato Alterado Cypress').should('be.visible')
    cy.contains('alterado.cypress@ebac.com').should('be.visible')
    cy.contains('11999990000').should('be.visible')
  })

  it('Deve remover um contato da lista', () => {
    cy.get('.contato').then((items) => {
      const quantidadeInicial = items.length

      cy.get('.contato').last().find('.delete').click()

      cy.get('.contato').should('have.length', quantidadeInicial - 1)
    })
  })
})