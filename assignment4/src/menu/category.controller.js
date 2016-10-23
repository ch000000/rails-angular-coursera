(function () {
'use strict';

angular.module('Menu')
.controller('CategoryController', CategoryController).
constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// 'item' is injected through state's resolve
//CategoryController.$inject = ['item']
// CategoryController.$inject = ['items'];
// function CategoryController(items) {
  // var categoryList = this;
  // categoryList.items = items;
// } 

CategoryController.$inject = ['items'];

   function CategoryController(items) {
     var itemList = this;
     itemList.items = items.data.menu_items;
     itemList.categoryName = items.data.category.name;
   }  
})();
