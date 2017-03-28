# Branches of Challenges

This repository is designed with the intent to teach debugging through the
javascript console, elements, application, and eventually the network tabs.


## Challenges
### Easy:

1. ch-easy-01 - HTML: On the LobbyPage, when I click on the subheader segment area, I should be able to see the content of the page switch between showing "Drafts", "Posts", and "Create" depending on which segment I clicked on. This works up until I click on "Create", instead of seeing "Create" it shows a blank content screen.
2. ch-easy-02 - TS: something is wrong with the transpiling, figure out what and solve it.


### Medium:
1. ch-medium-01 - HTML: the *ngFor is working on the posts, but not the drafts. Solve the issue.
2. 


### Difficult:
1. ch-difficult-01 - (not given): When a user clicks on a single schedule item from the Posts list, they should navigate to the ScheduleViewPage. My issue is that I get a run time error when I click on a schedule item. I was in the process of adding a new page named `ScheduleView` to navigate to from the `LobbyPage`. I used the `ionic g page ScheduleView` command to create the page, then I imported it into the `src/pages/lobby/lobby.ts` so I can navigate to the page. I then added the (click) attribute to an html element in order to call a function I defined as `scheduleClicked` in the .ts file of the LobbyPage.
2. ch-difficult-02 - (not given): When a user clicks on a single schedule item from the Posts list, it should pass the schedule they clicked on to the ScheduleViewPage using navParams. My issue while trying to implement this includes an error being thrown in the console during the transpiling process. I am pasing the post form the `*ngFor="let post of posts"` in as a parameter when the user executes the `(click)="scheduleClicked(post)"`. My .ts file where I defined scheduleClicked function is expecting a parameter and passes it in the params object as `schedule`. On the ScheduleViewPage I defined a variable named schedule and in the ionViewDidLoad I set it equal to this.navParams.schedule.