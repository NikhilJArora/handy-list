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
    shouldShowDelete : true,
    shouldShowReorder : true,
    listCanSwipe : true
  }

  vm.events = [
    {title, description},
    {},
    {},
    {}
  ];

}


})();
