# Branches of Challenges

This repository is designed with the intent to teach debugging through the
javascript console, elements, application, and eventually the network tabs.


## Order to Complete Challenges
1. ch-easy-01
2. ch-easy-02
3. ch-medium-01
4. ch-difficult-01
5. ch-difficult-02
6. ch-medium-02
7. ch-difficult-03

## Challenges
#### Easy:

1. ch-easy-01 - `src/pages/lobby/lobby.html`: On the LobbyPage, when I click on the subheader segment area, I should be able to see the content of the page switch between showing "Drafts", "Posts", and "Create" depending on which segment I clicked on. This works up until I click on "Create", instead of seeing "Create" it shows a blank content screen.
2. ch-easy-02 - `src/pages/lobby/lobby.ts`: I expect my transpiling to complete without an error. I am seeing an error that is stopping me from testing out the change I implemented. I added two arrays to the LobbyPage's .ts file since my last successful transpile.


#### Medium:
1. ch-medium-01 - `src/pages/lobby/lobby.html`: the *ngFor is working on the posts, but not the drafts.
2. ch-medium-02 - `src/providers/dummy-data.ts`: I decided to move the location of the test data form my LobbyPage component to a provider named DummyData, I expect the app to function normally. Instead of it working normally, I am getting another transpiling error. First thing I did, was run `ionic g provider DummyData`. Next, I imported it into the app.module.ts and injected it to the providers array. Then I imported it into the lobby.ts and re-defined it as dummyData inside the constructor. I moved the data that is currently being set to posts and drafts to be located in the DummyData provider. I created two functions in the DummyData provider to return either posts or drafts. I then retrieve the data from the DummyData provider inside the LobbyPage ts file.


#### Difficult:
1. ch-difficult-01 - (not given): When a user clicks on a single schedule item from the Posts list, they should navigate to the ScheduleViewPage. My issue is that I get a run time error when I click on a schedule item. I was in the process of adding a new page named `ScheduleView` to navigate to from the `LobbyPage`. I used the `ionic g page ScheduleView` command to create the page, then I imported it into the `src/pages/lobby/lobby.ts` so I can navigate to the page. I then added the (click) attribute to an html element in order to call a function I defined as `scheduleClicked` in the .ts file of the LobbyPage.
2. ch-difficult-02 - (not given): When a user clicks on a single schedule item from the Posts list, it should pass the schedule they clicked on to the ScheduleViewPage using navParams. My issue while trying to implement this includes an error being thrown in the console during the transpiling process. I am pasing the post form the `*ngFor="let post of posts"` in as a parameter when the user executes the `(click)="scheduleClicked(post)"`. My .ts file where I defined scheduleClicked function is expecting a parameter and passes it in the params object as `schedule`. On the ScheduleViewPage I defined a variable named schedule and in the ionViewDidLoad I set it equal to this.navParams.schedule.
3. ch-difficult-03 - (`src/app/app.component.ts` and `src/app/app.html`): I found the sidemenu code in the files mentioned to the left. As you can see on the preview for the app, the group menu looks good. Figure out how to replicate the group menu as the main menu with items that look similar to the balsamiq mock up for the main menu.
