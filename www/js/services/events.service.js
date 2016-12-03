(function() {
'use strict';

angular.module('events')
  .factory('eventsService', eventsFactory);


function eventsFactory($log) {


  var _eventsList = [
      {title: 'Backyard BBQ', description: 'event will be held in the backyard', date:'2016-12-22'},
      {title: 'Family Gathering', description: 'event will be held in the backyard', date:'2016-12-25'}
  ];


//Public API//
  var service = {
    getEvents : getEvents,
    addEvent : addEvent,
    deleteEvent : deleteEvent
  };

  return service;

  //////////////////////Private Functions///////////////////////


//returns the minimal list used to build the list view for user to choose what event they want to view
function getEvents() {
  return _eventsList;
}

//returns the full event with all detailed information (used for the event page )
function getEventDetailed(name) {
  //TODO
}

//removes event from list...
function deleteEvent(index) {
  if (index > -1){
      _eventsList.splice(index, 1);
  }

}

//will add new event to list and create an object for that event (for now, can store in flat files... eventually will use mongoDB)
function addEvent(event) {
  {

    if(validEventFormat(event)){

    }
  }
}


//checks to see event structure
function validEventFormat(event){
  if(event && event.title && event.description){
    var unique = _eventsList.find(function(element) {
      return (element.title === this.trim());
    }, event.title);
    if (unique === undefined){
      return true;
    }
  }
  return false;
}








}//end of factory function
})();
