(function () {
'use strict';

angular.module('Menu')
.service('MenuService', MenuService);


//MenuService.$inject = ['$q', '$timeout']

MenuService.$inject = ['$http', 'ApiBasePath', '$q'];
   
   function MenuService($http, ApiBasePath,$q) {
      var service = this;  
      
      service.getCategories= function (){
         var deferred = $q.defer();

         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
         });
         deferred.resolve(response);
         
         return deferred.promise;
      };  
      
       

      service.getItems= function (shortName){
         var deferred = $q.defer();

         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params: {
               category: shortName
            }
         });  
         deferred.resolve(response);
         
         return deferred.promise;
      };  
   } 
   
   
   
function MenuServiceQ($q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
