/// <reference types="cypress" />

describe('when selected a specific data from calendar', () => {
    it('show events on that day', () => {
        cy.visit('https://damian-events.coursedog.com');
        cy.wait(400);
        cy.intercept('GET', 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?includeRelatedData=true&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&startDate=2021-11-20&endDate=2021-11-20&groupByEventAndDate=true&orderBy=startDate,startTime').as('getDay');
        cy.get('[class="vc-day-content vc-focusable vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full"]').eq(20).click();
        cy.wait("@getDay").get("@getDay").should(({ response: { statusCode } }) => {
                expect(statusCode).to.equal(200);
            });
    });
})