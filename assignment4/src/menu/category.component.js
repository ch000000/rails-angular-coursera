(function () {
'use strict';

angular.module('Menu')
.component('category', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
