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
RegisteredController.$inject = ['firstname'];
function RegisteredController(ApiPath, firstname) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath; 
  console.log(firstname);
}

})();
