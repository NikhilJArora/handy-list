(function() {
'use strict';

angular.module('events')
  .factory('eventsService', eventsFactory);


function eventsFactory($log) {

  var eventsObj = {};


//Public API//
  var service = {
    getEventsList : getEventsList,
    deleteEvent : deleteEvent,
    addEvent : addEvent
  };

  return service;

  //////////////////////Private Functions///////////////////////


//returns the minimal list used to build the list view for user to choose what event they want to view
function getEventsList() {

}

//returns the full event with all detailed information (used for the event page )
function getEventDetailed() {

}

//removes event from list...
function deleteEvent() {

}

//will add new event to list and create an object for that event (for now, can store in flat files... eventually will use mongoDB)
function addEvent() {

}








}//end of factory function
})();
