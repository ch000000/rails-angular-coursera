(function () {
'use strict';

angular.module('MenuApp')
.component('category', {
  templateUrl: 'src/menu/templates/category.template.html',
  bindings: {
    items: '<'
  }
});

})();
