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
         controllerAs: 'reg'
       }) 
       .state('registered', { 
         url: '/register',
         templateUrl: 'src/public/registered/registered.html',  
         controller: 'RegisteredController',
         controllerAs: 'regUser', 
         params: { 
            user: {}
         },
         resolve: {
            favDish: ['$stateParams','MenuService', function ($stateParams, MenuService) {
               var user = $stateParams.user;
               return MenuService.getMenuItem($stateParams.user);  
            }]
         }
       }) 
       .state('userProfile', { 
         url: '/user',
         templateUrl: 'src/public/user/user.html',  
         controller: 'UserController', 
         controllerAs: 'userCtrl',
         resolve: {
            user: ['MenuService', function ( MenuService) { 
               var theUser = MenuService.getUser(); 
               if (!theUser) return 'noUser';
               return MenuService.getMenuItem(theUser)
               .then (function (favDish){
                   theUser.favDish = favDish;
                   return theUser;
               } )
            }]
         }
       }); 
   }
})();
  
