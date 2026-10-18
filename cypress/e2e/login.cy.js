describe('Login', () => {
  beforeEach(() => {
      cy.visit('/')

  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisValidas()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados válidos deve apresentar mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalidas()
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})