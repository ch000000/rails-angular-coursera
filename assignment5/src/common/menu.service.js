(function () {
   "use strict";

   angular.module('common')
   .service('MenuService', MenuService);


   MenuService.$inject = ['$http', 'ApiPath'];

   function MenuService($http, ApiPath) {
     var service = this;

     service.getCategories = function () {
       return $http.get(ApiPath + '/categories.json').then(function (response) {
         return response.data;
       });
     };


     service.getMenuItems = function (category) {
       var config = {};
       if (category) {
         config.params = {'category': category};
       }

       return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
         return response.data;
       });
     }; 
     
     service.getMenuItem = function (itemId) {  
         var config = {};
         if (itemId) {
            config.params = {'id': itemId};
         } 
         // return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
            // function findItem(item) { 
                // return item.id === itemId;
            // }      
            // return response.data.menu_items.find(findItem);
         // }); 
         //console.log (itemId);         
         return $http.get('https://chrailsangular.herokuapp.com/menu_items/A1.json')
          .then(function (response) {
            return response.data
         })
         .catch(function(response) {
           console.log('ERROR', response.status, response.data);
           return response.data
         });
         // return $http.get('https://https//chrailsangular.herokuapp.com.herokuapp.com/menu_items/' + itemId)
         // .then(function (response) {
            // return response
         // })
         // .catch(function(response) {
           // console.log('ERROR', response.status, response.data);
           // return response 
         // }) 
         
      }; 
   }

   
})();
