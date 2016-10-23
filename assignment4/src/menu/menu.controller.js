(function () {
'use strict';

angular.module('Menu')
.controller('MenuController', MenuController)
   .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuController.$inject = ['items'];
function MenuController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
