describe('Main page user interactions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should perform search by keyword', () => {
    cy.get('input[placeholder="What do you want to watch?"]').type('star');
    cy.get('input[type="submit"]').click().wait(2000);

    cy.get('[class*=tile] [class*=name]').contains('star').should('exist');
  });

  it('should perform movies sorting', () => {
    cy.get('#sort-by').select('title');

    cy.get('[class*=tile] [class*=name]').contains('Amigos').should('exist');
  });

  it('should perform filter by genre', () => {
    cy.get('[class*=styles_genres] [class*=genre]').contains('Comedy').click('');

    cy.get('[class*=tile] [class*=genres]').contains('Comedy').should('exist');
  });

  it('should open selected movie details and return back', () => {
    cy.get('img[alt*=Gold]').click('');
    cy.get('[class*=styles_info] [class*=styles_header').contains('Gold Rush').should('exist');

    cy.get('button[class*=search]').click('');
    cy.get('input[type=submit]').should('exist');
  });
});