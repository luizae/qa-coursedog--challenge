describe('look for events on the search bar', () => {
    it('type what you want to find', () => {
        cy.visit('https://damian-events.coursedog.com');
        cy.wait(300);
        cy.get('input').type("Tokyo");
        cy.get('.search__button').click();
        cy.get('#61w5wfhCtxaJ6zYlebWA').contains(/Tokyo/);
        });
})