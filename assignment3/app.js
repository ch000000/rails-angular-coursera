(function () {
'use strict';

   angular.module('NarrowItDownApp', [])
   .controller('NarrowItDownController', NarrowItDownController) 
   .factory('MenuSearchFactory', MenuSearchFactory)
   .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
   .directive('foundItems', FoundItemsDirective);  
   
   function FoundItemsDirective(){
      var ddo = {
         templateUrl: 'menuList.html',
         scope: {
            items: '<',
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
      list.emptyList = function() { 
         if (!list.items) return false;
         if (list.items.length === 0 ) return true;  
      }
   }  
   
   NarrowItDownController.$inject = ['MenuSearchFactory']; 
   function NarrowItDownController(MenuSearchFactory) {
      var filterCtrl = this;  
      var menuList = MenuSearchFactory();
       
      filterCtrl.filter = function () {
         var found = [];
         var promise = menuList.getMatchedMenuItems();
         promise.then(function (response) {
            var responseList = response.data; 
              for (var i = 0; i < responseList.menu_items.length; i ++ ) {
              if (filterCtrl.searchTerms !== "" && responseList.menu_items[i].description.toLowerCase().indexOf(filterCtrl.searchTerms) > -1 ) 
                found.push(responseList.menu_items[i]);
            }
            return found;
         })
         .catch(function (error) {
            console.log("Something went terribly wrong.");
         }); 
        filterCtrl.items = found;   
      };  
     
      filterCtrl.removeItem = function (itemIndex) { 
         menuList.removeItem(this.items, itemIndex);  
      };  
   }  
   
   MenuSearchFactory.$inject = ['$http', 'ApiBasePath'];
   
   function MenuSearchService($http, ApiBasePath) {
      var service = this;  
      
      service.getMatchedMenuItems= function (){
         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
         });
         return response;  
      };  
      
      service.removeItem = function (items, itemIndex) {
         items.splice(itemIndex, 1);
     };
   }  
   
   function MenuSearchFactory($http, ApiBasePath) {
      var factory = function () {
         return new MenuSearchService($http, ApiBasePath);
      }; 
      return factory;
   } 
   
})();

   