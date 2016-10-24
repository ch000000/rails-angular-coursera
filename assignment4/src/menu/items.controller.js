(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController).
constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

// 'item' is injected through state's resolve
//CategoryController.$inject = ['item']
// CategoryController.$inject = ['items'];
// function CategoryController(items) {
  // var categoryList = this;
  // categoryList.items = items;
// } 

ItemsController.$inject = ['items'];

   function ItemsController(items) {
     var itemList = this;
     itemList.items = items.data.menu_items;
     itemList.categoryName = items.data.category.name;
   }  
})();
