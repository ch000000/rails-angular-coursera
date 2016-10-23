(function () {
'use strict';

angular.module('Menu')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
      url: '/main-list',
      templateUrl: 'src/menu/templates/menu.template.html',
      controller: 'MenuController as mainList',
      resolve: {
         items: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
         }]
      }
   }) 
   .state('categoryDetail', {
      url: '/category-detail/{itemId}',
      templateUrl: 'src/menu/templates/category.template.html',
      controller: 'CategoryController as categoryDetail',
      resolve: {
         items: ['$stateParams', 'MenuService', 
            function ($stateParams, MenuService) {
               return MenuService.getCategories()
               .then(function (items) {
                  return items.data[$stateParams.itemId]
               })
               .then (function (category){  
                  return MenuService.getItems(category.short_name);  
               })  
            }
         ]
      }
   });  
}

})();

// .state('categoryDetail', {
      // url: '/category-detail/{categoryId}',
      // templateUrl: 'src/menu/templates/category.template.html',
      // controller: 'CategoryController as categoryDetail',
      // resolve: {
         // items: ['$stateParams', 'MenuService', 
            // function ($stateParams, MenuService) {
               // return MenuService.getCategories()
               // .then(function (items) {
                  // return items[$stateParams.itemId]  
                  // .then (function (category){ 
                     // return MenuService.getItems(category.shortName)
                     // .then(function (items) {
                        // return items.data.menu_items;
                     // }); 
                  // }); 
               // })
            // }
         // ]
      // }
   // });  
   
   
// resolve: {
         // items: ['$stateParams', 'MenuService', 
            // function ($stateParams, MenuService) {
               // return MenuService.getCategories()
               // .then (function (items) {
                  // return items[$stateParams.itemId]
                  // .then (function (items) {
                     // MenuService.getItems(items[$stateParams.itemId])
                     // .then(function (items) {
                        // return items.data.menu_items;
                     // });
                  // }); 
               // });
            // }
         // ]
      // }