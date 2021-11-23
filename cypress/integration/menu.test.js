describe('looking for "Today Events"', () => {
    it('By a date', () => {
        cy.clock(Date.UTC(2021, 10, 20), ['Date']);
        cy.visit('/');
        cy.get('[href="/today"]').click();
        cy.wait(100);
        cy.get('[aria-label="Event date is Sat Nov 20 2021"]').contains(/Nov\s20\s2021/);
        });
})

describe('Using the filter', () => {
    it('Filter by organization', () => {
        cy.clock(Date.UTC(2021, 10, 20), ['Date']);
        cy.get('#orgSelect').select('Model UN');
        cy.intercept('GET', 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings/search/$filters?limit=20&skip=0&organization=n0e9tGIexixWt9GAcQJc&startDate=2021-11-20&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&groupByEventAndDate=true&includeAcademicMeetings=false&orderBy=startDate,startTime').as('getFilter');

        cy.wait("@getFilter").get("@getFilter").should(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property("numberOfMeetings");
            
            cy.get('[class="text-black font-bold text-xl mt-0 mb-2 hover:underline leading-tight"]')
            .should('have.length', response.body.numberOfMeetings)
            .each(($el) => {
                cy.wrap($el).contains(/Model/);
            });
        });
    });
})

describe('looking for "Featured Events"', () => {
    it('By clicking on menu', () => {
        cy.clock(Date.UTC(2021, 8, 2), ['Date']);
        cy.intercept('GET', 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?includeRelatedData=true&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&featured=true&startDate=2021-09-02&endDate=2021-09-09&groupByEventAndDate=true&orderBy=startDate,startTime').as('getFeatured');
  
        cy.visit('/');
        cy.get('[href="/featured"]').click();

        cy.wait("@getFeatured").get("@getFeatured").should(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property("meetings");
            const meetingsCount = Object.keys(response.body.meetings).length
            cy.get('[class="text-black font-bold text-xl mt-0 mb-2 hover:underline leading-tight"]').should('have.length', meetingsCount);
        });
    });
})