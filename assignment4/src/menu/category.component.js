(function () {
'use strict';

angular.module('MenuApp')
.component('category', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
