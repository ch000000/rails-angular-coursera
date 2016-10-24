(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) { 
  
  $urlRouterProvider.otherwise('/'); 
  
  $stateProvider 
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })
 
  .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/menu.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
         items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
         }]
      }
   }) 
   .state('category', {
      url: '/category/{itemId}',
      templateUrl: 'src/menu/templates/category.template.html',
      controller: 'ItemsController as categoryItems',
      resolve: {
         items: ['$stateParams', 'MenuDataService', 
            function ($stateParams, MenuDataService) {
               return MenuDataService.getAllCategories()
               .then(function (items) {
                  return items.data[$stateParams.itemId]
               })
               .then (function (category){  
                  return MenuDataService.getItemsForCategory(category.short_name);  
               })  
            }
         ]
      }
   });  
}

})();

