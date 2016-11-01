(function () {
"use strict";

   angular.module('public')
   .controller('RegisterController', RegisterController); 
//RegisteredController.$inject = ['MenuService'];
   function RegisterController() {
      var reg = this;
      //reg.menuItem = menuItem;
      console.log(this);
   } 
})();

 

})();