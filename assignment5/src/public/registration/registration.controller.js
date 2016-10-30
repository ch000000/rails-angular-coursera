(function () {
"use strict";

   angular.module('public')
   .controller('RegistrationController', RegistrationController);
   
   RegistrationController.$inject = ['MenuService'];
   function RegistrationController(MenuService) {
      var reg = this;
      //reg.menuItem = menuItem;
      var service = MenuService;

      reg.submit = function () {  
         reg.menuItem =  MenuService.getMenuItem(1);  
      };
   } 
})();

