/// <reference types="cypress" />

describe('when selected a specific data from calendar', () => {
    it('show events on that day', () => {
        cy.visit('https://damian-events.coursedog.com');
        cy.wait(400);
        cy.intercept('GET', 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?includeRelatedData=true&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&startDate=2021-11-20&endDate=2021-11-20&groupByEventAndDate=true&orderBy=startDate,startTime').as('getDay');
        cy.get('[class="vc-day-content vc-focusable vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full"]').eq(20).click();
        cy.wait("@getDay").get("@getDay").should(({ response: { statusCode } }) => {
                console.log("statusCode", statusCode);
                expect(statusCode).to.equal(200);
            });
    });
})

describe('looking for "Today Events"', () => {
    it('By a date', () => {
        cy.clock(Date.UTC(2021, 10, 20), ['Date']);
        cy.visit('https://damian-events.coursedog.com');
        cy.get('[href="/today"]').click();
        cy.wait(100);
        cy.get('[aria-label="Event date is Sat Nov 20 2021"]').contains(/Nov\s20\s2021/);
        });
})

describe('look for events on the search bar', () => {
    it('type what you want to find', () => {
        cy.visit('https://damian-events.coursedog.com');
        cy.wait(300);
        cy.get('input').type("Tokyo");
        cy.get('.search__button').click();
        cy.get('#61w5wfhCtxaJ6zYlebWA').contains(/Tokyo/);
        });
})


