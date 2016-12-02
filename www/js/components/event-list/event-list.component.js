(function() {
'use strict';
angular.module('events', []);

angular.module('events')
  .component('eventList',{
    templateUrl:'js/components/event-list/event-list.template.html',
    controller:['$log', eventListController]
  });

function eventListController($log) {
  var vm = this;

  vm.listSettings = {
    shouldShowDelete : false,
    shouldShowReorder : false,
    listCanSwipe : true
  }

  vm.events = [
    {eventId: 1, title: 'Backyard BBQ', description: 'event will be held in the backyard', date:'2016-12-22'},
    {eventId: 2, title: 'Family Gathering', description: 'event will be held in the backyard', date:'2016-12-25'}
  ];

  //private functions:

//will add item to events object but will later post to events svc!
  function addEvent() {

  }

//called to delete an event
  function deleteEvent() {

  }
  //called to move an event from one index to another... not sure how this would work with the svc
  function reorderEvent(event, fromindex, toIndex) {

  }

//


} // end of controller

})();
