(function () {
"use strict";

angular.module('public')
.component('registered', {
  templateUrl: 'src/public/registered/registered.html',
  bindings: {
    menuItem: '<'
  },
  controller : RegisteredController
});  

})();
