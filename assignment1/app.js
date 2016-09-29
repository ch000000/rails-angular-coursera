(function () {
'use strict';

   angular.module('LunchCheckApp', [])
   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   
   function LunchCheckController($scope) { 
      $scope.lunchInput = '';
      $scope.setMessage = function (lunchInput) { 
         if ($scope.lunchInput == '') return $scope.lunchMessage = 'Please enter data first'; 
         var courses = $scope.lunchInput.split(',');
         
         $scope.lunchMessage = courses.length < 4 ? 'Enjoy!' : 'Too much!';  
      }; 
   }

})();
