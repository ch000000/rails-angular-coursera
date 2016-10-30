(function () {
"use strict";

angular.module('public')
.component('registered', {
  templateUrl: 'src/public/registration/registered.html',
  bindings: {
    menuItem: '='
  },
  controller : RegisteredController
}); 

RegisteredController.$inject = ['ApiPath'];
function RegisteredController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
