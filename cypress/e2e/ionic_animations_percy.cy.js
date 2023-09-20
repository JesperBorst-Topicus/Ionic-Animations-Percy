describe('template spec', () => {
  it('passes', () => {
    cy.visit('welkom');
    cy.get('[data-test="inloggen"]').click();
    cy.get('[id="username"]').type('testacc.spreekuur+5389234@gmail.com');
    cy.get('[id="password"]').type('test123!')
    cy.get('[id="kc-login"]').click();
    //FIXME: End-to-End environment currently not working, once issues have been resolved navigate to the modal and take a snapshot.
    cy.get('[data-test="tab-button-Metingen"]').click();
    //Waiting 250ms for the network to be stable before taking the snapshot.
    cy.waitForNetworkIdle(250);
    cy.percySnapshot('Snapshot of a modal that only partially shows up');
  });
});