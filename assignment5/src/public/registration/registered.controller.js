(function () {
"use strict";

   angular.module('public')
   .controller('RegisteredController', RegisteredController); 
//RegisteredController.$inject = ['MenuService'];
   function RegisteredController() {
      var reg = this;
      //reg.menuItem = menuItem;
      console.log(this);
   } 
})();


RegisteredController.$inject = ['ApiPath'];
RegisteredController.$inject = ['firstname'];
function RegisteredController(ApiPath, firstname) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath; 
  console.log(firstname);
}

})();