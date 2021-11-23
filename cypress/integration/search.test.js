describe('look for events on the search bar', () => {
    it.skip('type what you want to find', () => {
        cy.visit('/');
        cy.wait(300);
        cy.get('input').type("Tokyo");
        cy.get('.search__button').click();
        cy.get('[class="text-black font-bold text-xl mt-0 mb-2 hover:underline leading-tight"]').contains(/Tokyo/);
        });
})