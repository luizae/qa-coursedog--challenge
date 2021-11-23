# qa-coursedog--challenge
[Recruitment Task - QA Engineer @ Coursedog]

What you going to need to run the tests:

- git clone
- npm install
- npm run test

export LANG="en_EN.UTF-8"

Improvement:

- When I select a specific date from the calendar: I can only see events that happen that day.

    It does makes sense shows the events at the especific date that were clicked, but if there's none event on that day, the page could be improved by showing them the "Upcoming events" that are showed on the first page visit. Something like this:

    <img src="https://user-images.githubusercontent.com/38333519/142481635-6cfb6aaf-58a3-473a-8dd5-4a41b1848b33.png">

Problem found during the tests:

- When I click on Featured Events: I can see all upcoming featured events; Note: There are 3 upcoming featured meetings for that week.

    When we pick up the requisition from the date that has been passed on the test "Given that current date is September 2nd, 2021", it just has two events, not tree, as you can see here: 
    https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?includeRelatedData=true&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&featured=true&startDate=2021-09-02&endDate=2021-09-09&groupByEventAndDate=true&orderBy=startDate,startTime

- When I use the Search Input in the navigation bar and type in "Tokyo" and confirm:
    First time i made the test to looking for events in the search bar, the searched term "Tokyo" were able to bring an event.
    The second day that I played the test again, there were no events in the requisition, and this problem just occur with the "Tokyo" name.
    Because of this matter, I had to skip this test.

- When I click on the QA Task Submission event card
    Note that, in the requisition url, it's been settled that it has a start and a end date for looking for the events. That event "QA Task submition" is at Nov 18, so that one will not appear at this day (September 2nd) requision for "Featured Events".