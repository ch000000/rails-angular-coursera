(function () {
"use strict";

angular.module('public')
.component('user', {
  templateUrl: 'src/public/user/user.html',
  bindings: {
    user: '='
  },
  controller : UserController
}) 
.controller('UserController', UserController);
UserController.$inject = ['user', 'ApiPath'];
function UserController(user,ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.basePath = ApiPath;
}
})();

 