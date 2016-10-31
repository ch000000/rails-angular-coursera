(function() {
'use strict';

   angular.module('public')
   .config(routeConfig);

   /**
    * Configures the routes and views
    */
   routeConfig.$inject = ['$stateProvider'];
   function routeConfig ($stateProvider) {
     // Routes
     $stateProvider
         .state('public', {
         absract: true,
         templateUrl: 'src/public/public.html'
       })
       .state('public.home', {
         url: '/',
         templateUrl: 'src/public/home/home.html'
       })
       .state('public.menu', {
         url: '/menu',
         templateUrl: 'src/public/menu/menu.html',
         controller: 'MenuController',
         controllerAs: 'menuCtrl',
         resolve: {
           menuCategories: ['MenuService', function (MenuService) {
             return MenuService.getCategories();
           }]
         }
       })
       .state('public.menuitems', {
         url: '/menu/{category}',
         templateUrl: 'src/public/menu-items/menu-items.html',
         controller: 'MenuItemsController',
         controllerAs: 'menuItemsCtrl',
         resolve: {
           menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
             return MenuService.getMenuItems($stateParams.category);
           }]
         }
       })
       .state('register', { 
         url: '/register/',
         templateUrl: 'src/public/registration/registration.html',
         controller: 'RegistrationController',
         controllerAs: 'reg', 
         params: {
            firstname: null
         },
          resolve:{
            firstname: ['$stateParams', function($stateParams){
                return $stateParams.firstname;
            }]
         }
       }) 
       .state('registered', { 
         url: '/register',
         templateUrl: 'src/public/registration/registered.html',  
         controller: 'RegistrationController',
         controllerAs: 'rest', 
         params: {
            firstname: 'boo'
         },
         resolve: {
            menuItem: ['$stateParams','MenuService', function ($stateParams, MenuService) {
               console.log($stateParams);
               return MenuService.getMenuItem($stateParams.firstname);
            }]
         }
       });
   }
})();
  
