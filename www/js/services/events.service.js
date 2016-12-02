(function() {
'use strict';

angular.module('events')
  .factory('eventsService', eventsFactory);


function eventsFactory($log) {

  var eventsObj = {};
  var eventsList = [
      {eventId: 1, title: 'Backyard BBQ', description: 'event will be held in the backyard', date:'2016-12-22'},
      {eventId: 2, title: 'Family Gathering', description: 'event will be held in the backyard', date:'2016-12-25'}
  ];


//Public API//
  var service = {
    getEvents : getEvents,
    deleteEvent : deleteEvent,
    addEvent : addEvent
  };

  return service;

  //////////////////////Private Functions///////////////////////


//returns the minimal list used to build the list view for user to choose what event they want to view
function getEvents() {
  return eventsList;
}

//returns the full event with all detailed information (used for the event page )
function getEventDetailed(name) {

}

//removes event from list...
function deleteEvent() {

}

//will add new event to list and create an object for that event (for now, can store in flat files... eventually will use mongoDB)
function addEvent() {

}








}//end of factory function
})();
