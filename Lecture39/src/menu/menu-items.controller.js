(function () {
'use strict';

angular.module('Menu')
.controller('MenuItemController', MenuItemController;

// 'item' is injected through state's resolve
MenuItemController.$inject = ['item']
function MenuItemController(item) {
  var itemDetail = this;
  itemDetail.name = item.name; 
}

})();
