(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MeduDataService); 

MeduDataService.$inject = ['$http', 'ApiBasePath', '$q'];
   
   function MeduDataService($http, ApiBasePath,$q) {
      var service = this;  
      
      service.getAllCategories= function (){
         var deferred = $q.defer();

         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
         });
         deferred.resolve(response);
         
         return deferred.promise;
      };   

      service.getItemsForCategory= function (categoryShortName){
         var deferred = $q.defer();

         var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params: {
               category: categoryShortName
            }
         });  
         deferred.resolve(response);
         
         return deferred.promise;
      };  
   }

})();
