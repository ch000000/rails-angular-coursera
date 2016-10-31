(function () {
"use strict";

angular.module('public')
.component('registration', {
  templateUrl: 'src/public/registration/registration.html',
  bindings: {
    menuItem: '='
  },
  controller : RegistrationController
}); 

 
})();
