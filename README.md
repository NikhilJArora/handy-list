# handy-list-mobile-app

Hybrid mobile app used to plan parties and events.

This mobile app is used to develop my skills in hybrid mobile apps using ionic and Cordova.


Mobile App Design:

Goal: create an easy to use mobile app to be many to create events, add invitees (using contacts), and add/schedule tasks under an event.

Views: (Wire-frames will do uploaded at later time)
(unAuth)
 - login page: form which takes user credentials or access to (add user page)
 - add User page: form which accepts a new users information, send as a post request to users endpoint which will determine if user is unique

(Auth)
 - Events page: list of all events assigned to a user
 - Event Detailed page: used for user to view all recorded details of an event - also contains links to: invitees, Tasks, Event calendar)
 - Event Detailed Edit page: allow you to edit the details of your event
 - Event Invitees View: View is used to contain all a list of all added Invitees - can be used to search invitee, add invitee, end invite to invitee, and update status of invitee
 - Event Tasks: view a list of tasks of events
 - Event Tasks (Add Task): Allows you to add tasks to an event (ex: pick up steaks from john, the butcher)  - the tasks can be given a date, and location helping someone decide when to do a task a how to group common location/ time tasks...
 - Event calendar: calendar which shows all the tasks leading up to an event as well as some tasks that must be taken care of afterwards
 - Event Map: assuming user adds locations to their tasks, this will help then to plan what tasks to group together based on location

Restful API: (not is this project)
- the mobile app will communicate with a Restful API to get all GET, POST, PUT and DELETE all the entities it requires
- project URL will be located here once started...
current API endpoints:
- /users
- /events
- /event/tasks
- /event/invitees
