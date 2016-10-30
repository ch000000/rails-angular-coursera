(function () {
"use strict";

   angular.module('public')
   .controller('RegisterController', RegisterController);

   function RegisterController() {
      var reg = this;

      reg.submit = function () {
         reg.completed = true;
         console.log(reg);
      };
   } 
})();


