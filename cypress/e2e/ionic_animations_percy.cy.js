describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pgo-e2e.test.spreekuur.nl/')
    cy.get('[data-test="inloggen"]').click();
    cy.get('[id="username"]').type('testacc.spreekuur+5389234@gmail.com')
    cy.get('[id="password"]').type('test123!')
    cy.get('[id="kc-login"]').click();
    cy.contains('Dossier ophalen').click();
  })
})