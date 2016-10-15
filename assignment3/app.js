(function () {
'use strict';

   angular.module('NarrowItDownApp', [])
   .controller('NarrowItDownController', NarrowItDownController)
   .service('MenuSearchService', MenuSearchService)
   //.factory('MenuSearchFactory', MenuSearchFactory)
   .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
   .directive('foundItems', FoundItemsDirective); 
   
   //NarrowItDownController.$inject = ['MenuSearchFactory']; 
   NarrowItDownController.$inject = ['MenuSearchService']; 
   
      function FoundItemsDirective(){
      var ddo = {
         templateUrl: 'menuList.html',
         scope: {
            items: '<',
            myTitle: '@title',
            onRemove: '&'
         },
         controller: FoundItemsDirectiveController,
         controllerAs: 'list',
         bindToController: true
      };

      return ddo; 
   }
   
   function FoundItemsDirectiveController() {
      var list = this;  
       
   }
   
   
   function NarrowItDownController(MenuSearchService) {
      var menuList = this; 
      menuList.title = 'Dishes Found';
      menuList.filter = function () {
         var foundItems = [];
         var promise = MenuSearchService.getMatchedMenuItems();
         promise.then(function (response) {
            var responseList = response.data; 
              for (var i = 0; i < responseList.menu_items.length; i ++ ) {
              if (responseList.menu_items[i].name.toLowerCase().search(menuList.searchTerms) > -1 )
                foundItems.push(responseList.menu_items[i]);
            }
            return foundItems;
         })
         .catch(function (error) {
            console.log("Something went terribly wrong.");
         }); 
         menuList.foundItems = foundItems;  
      };
   }   
   


   
   MenuSearchService.$inject = ['$http', 'ApiBasePath'];
   
   function MenuSearchService($http, ApiBasePath) {
      var service = this; 
      service.getMatchedMenuItems= function (){
         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
         }) ;
          return response;  
      };   
   } 

   function MenuSearchFactory() {
     var factory = function () {
       return new MenuSearchService();
     };

     return factory;
   }

})();

   