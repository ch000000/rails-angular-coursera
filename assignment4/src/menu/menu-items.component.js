(function () {
'use strict';

angular.module('Menu')
.component('menuItems', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
