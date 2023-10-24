describe('GenreSelect', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('displays genre options when toggle button is clicked', () => {
    cy.get('.genre-select-toggle').click();
    cy.get('.genre-options').should('be.visible');
  });

  it('selects genres', () => {
    cy.get('.genre-select-toggle').click();
    cy.get('.genre-checkbox').each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).should('be.checked');
      } else if (index === 1) {
        cy.wrap($el).parent().click();
        cy.wrap($el).should('be.checked'); 
      } else {
        cy.wrap($el).should('not.be.checked'); 
      }
    });
  });
});