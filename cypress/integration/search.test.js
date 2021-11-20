describe('looking for "Today Events"', () => {
    it('By a date', () => {
        cy.clock(Date.UTC(2021, 10, 20), ['Date']);
        cy.visit('https://damian-events.coursedog.com');
        cy.get('[href="/today"]').click();
        cy.wait(100);
        cy.get('[aria-label="Event date is Sat Nov 20 2021"]').contains(/Nov\s20\s2021/);
        });
})