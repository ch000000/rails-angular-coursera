(function () {
"use strict";

   angular.module('public')
   .controller('RegisteredController', RegisteredController);  
   
   
RegisteredController.$inject = ['favDish', 'MenuService','$stateParams'];
   function RegisteredController(favDish, MenuService,$stateParams) {  
       var regUser = this; 
      if (favDish.error) {
         regUser.error = true;
         regUser.statusMessage = 'No such menu number exists';
      }
      else {
         MenuService.setUser ($stateParams.user); 
         regUser.statusMessage = 'Your information has been saved';
      } 
       return regUser;
   } 
})();


// RegisteredController.$inject = ['ApiPath'];
// RegisteredController.$inject = ['firstname'];
// function RegisteredController(ApiPath, firstname) {
  // var $ctrl = this;
  // $ctrl.basePath = ApiPath; 
  // console.log(firstname);
// }

// })();