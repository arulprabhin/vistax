describe('Dashboard page', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it('should have incident widget', () => {
    cy.get('h5').contains('Incident');
  });
});
