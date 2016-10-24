(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController)
   .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
